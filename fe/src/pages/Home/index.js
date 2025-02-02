import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  InputSearchContainer,
  Header,
  ListHeader,
  Card,
  ErrorContainer,
  EmptyListContainer,
  SearchNotFoundContainer,
} from "./styles";

import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";
import sad from "../../assets/images/sad.svg";
import emptyBox from "../../assets/images/empty-box.svg";
import magnifierQuestion from "../../assets/images/magnifier-question.svg";

import Loader from "../../components/Loader";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

import ContactsService from "../../services/ContactsService";
import toast from "../../utils/toast";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [contactBeingDeleted, setContactBeingDeleted] = useState({});
  const [isLoadingDelete, setIsloadingDelete] = useState(false);

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [contacts, searchTerm],
  );

  const loadContacts = useCallback(async () => {
    try {
      setIsloading(true);

      const contactsList = await ContactsService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
    } catch {
      setHasError(true);
    } finally {
      setIsloading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

  function handleDeleteContact(contact) {
    setContactBeingDeleted(contact);
    setIsDeleteModalVisible(true);
  }

  function handleCloseDeleteModal() {
    setContactBeingDeleted({});
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

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Modal
        danger
        visible={isDeleteModalVisible}
        isLoading={isLoadingDelete}
        title={`Tem certeza que deseja remover o contato ”${contactBeingDeleted?.name}”?`}
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteContact}
      >
        Esta ação não poderá ser desfeita!
      </Modal>

      {contacts.length > 0 && (
        <InputSearchContainer>
          <input
            type="text"
            placeholder="Pesquisar contato..."
            value={searchTerm}
            onChange={handleChangeSearchTerm}
          />
        </InputSearchContainer>
      )}

      <Header
        $justifyContent={
          hasError
            ? "flex-end"
            : contacts.length < 1
              ? "center"
              : "space-between"
        }
      >
        {!hasError && contacts.length > 0 && (
          <h2>
            {filteredContacts.length} Contato
            {filteredContacts.length !== 1 && "s"}
          </h2>
        )}
        <Link to="/new">Novo contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Error" />
          <div>
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>
            <Button type="button" onClick={handleTryAgain}>
              Tentar novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {contacts.length < 1 && !isLoading && (
            <EmptyListContainer>
              <img src={emptyBox} alt="Empty box" />
              <p>
                Você ainda não tem nenhum contato cadastrado!
                <br />
                Clique no botão <strong>”Novo contato”</strong> acima para
                cadastrar o seu primeiro!
              </p>
            </EmptyListContainer>
          )}

          {contacts.length > 0 && filteredContacts.length < 1 && (
            <SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="Magnifier question" />
              <span>
                Nenhum resultado foi encontrado para{" "}
                <strong>”{searchTerm}”</strong>.
              </span>
            </SearchNotFoundContainer>
          )}

          {filteredContacts.length > 0 && (
            <ListHeader $orderBy={orderBy}>
              <button type="button" onClick={handleToggleOrderBy}>
                Nome
                <img src={arrow} alt="Sort" />
              </button>
            </ListHeader>
          )}

          {filteredContacts.map((contact) => (
            <Card key={contact.id}>
              <div className="info">
                <div className="contact-name">
                  <strong>{contact.name}</strong>
                  {contact.category.name && (
                    <small>{contact.category.name}</small>
                  )}
                </div>
                {contact.email && <span>{contact.email}</span>}
                {contact.phone && <span>{contact.phone}</span>}
              </div>

              <div className="actions">
                <Link to={`/edit/${contact.id}`}>
                  <img src={edit} alt="Edit" />
                </Link>
                <button
                  type="button"
                  onClick={() => handleDeleteContact(contact)}
                >
                  <img src={trash} alt="Delete" />
                </button>
              </div>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
}
