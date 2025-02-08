import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";

import ContactsService from "../../services/ContactsService";
import toast from "../../utils/toast";

export default function useHome() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [contactBeingDeleted, setContactBeingDeleted] = useState({});
  const [isLoadingDelete, setIsloadingDelete] = useState(false);
  const [filteredContacts, setFileredContacts] = useState([]);

  const [isPending, startTransition] = useTransition();

  // const filteredContacts = useMemo(
  //   () =>
  //     contacts.filter((contact) =>
  //       contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
  //     ),
  //   [contacts, searchTerm],
  // );

  const loadContacts = useCallback(async () => {
    try {
      setIsloading(true);

      const contactsList = await ContactsService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
      setFileredContacts(contactsList);
    } catch {
      setHasError(true);
      setContacts([]);
    } finally {
      setIsloading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const handleToggleOrderBy = useCallback(() => {
    setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
  }, []);

  function handleChangeSearchTerm(event) {
    const { value } = event.target;

    setSearchTerm(value);

    startTransition(() => {
      setFileredContacts(
        contacts.filter((contact) =>
          contact.name.toLowerCase().includes(value.toLowerCase()),
        ),
      );
    });
  }

  function handleTryAgain() {
    loadContacts();
  }

  const handleDeleteContact = useCallback((contact) => {
    setContactBeingDeleted(contact);
    setIsDeleteModalVisible(true);
  }, []);

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
  }

  async function handleConfirmDeleteContact() {
    try {
      setIsloadingDelete(true);

      await ContactsService.deleteContact(contactBeingDeleted.id);

      setContacts((prevState) =>
        prevState.filter((contact) => contact.id !== contactBeingDeleted.id),
      );

      handleCloseDeleteModal();

      toast({
        type: "success",
        text: "Contato deletado com sucesso!",
      });
    } catch {
      toast({
        type: "danger",
        text: "Ocorreu um erro ao deletar o contato!",
      });
    } finally {
      setIsloadingDelete(false);
    }
  }

  return {
    isPending,
    isLoading,
    isDeleteModalVisible,
    isLoadingDelete,
    hasError,
    contacts,
    filteredContacts,
    orderBy,
    searchTerm,
    contactBeingDeleted,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    handleChangeSearchTerm,
    handleTryAgain,
    handleToggleOrderBy,
    handleDeleteContact,
  };
}
