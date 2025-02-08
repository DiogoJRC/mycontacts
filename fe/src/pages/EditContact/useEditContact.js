import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import ContactsService from "../../services/ContactsService";
import toast from "../../utils/toast";
import useSafeAsyncAction from "../../hooks/useSafeAsyncAction";

export default function useEditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState("");
  const contactFormRef = useRef(null);
  const safeAsyncAction = useSafeAsyncAction();

  const { id } = useParams();
  //const history = useHistory();

  useEffect(() => {
    const controller = new AbortController();

    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(
          id,
          controller.signal,
        );

        safeAsyncAction(() => {
          contactFormRef.current.setFieldsValues(contact);
          setIsLoading(false);
          setContactName(contact.name);
        });
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          safeAsyncAction(() => {
            //history.push("/");
            toast({
              type: "danger",
              text: "Contato não encontrado!",
            });
          });
        }
      }
    }

    loadContact();

    return () => {
      controller.abort();
    };
  }, [id, safeAsyncAction]);

  async function handleSubmit(contact) {
    try {
      const contactData = await ContactsService.updateContact(id, contact);

      setContactName(contactData.name);

      toast({
        type: "success",
        text: "Contato editado com sucesso!",
      });
    } catch {
      toast({
        type: "danger",
        text: "Ocorreu um erro ao editar o contato!",
      });
    }
  }

  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit,
  };
}
