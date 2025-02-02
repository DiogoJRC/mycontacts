import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";

import ContactsService from "../../services/ContactsService";
import toast from "../../utils/toast";
import useSafeAsyncAction from "../../hooks/useSafeAsyncAction";
import Presentation from "./Presentation";

export default function Container() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState("");
  const contactFormRef = useRef(null);
  const safeAsyncAction = useSafeAsyncAction();

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);

        safeAsyncAction(() => {
          contactFormRef.current.setFieldsValues(contact);
          setIsLoading(false);
          setContactName(contact.name);
        });
      } catch {
        safeAsyncAction(() => {
          history.push("/");
          toast({
            type: "danger",
            text: "Contato não encontrado!",
          });
        });
      }
    }

    loadContact();
  }, [id, history]);

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

  return (
    <Presentation
      isLoading={isLoading}
      contactName={contactName}
      contactFormRef={contactFormRef}
      onSubmit={handleSubmit}
    />
  );
}
