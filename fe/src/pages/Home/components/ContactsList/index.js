import PropTypes, { shape } from "prop-types";

import arrow from "../../../../assets/images/icons/arrow.svg";
import edit from "../../../../assets/images/icons/edit.svg";
import trash from "../../../../assets/images/icons/trash.svg";

import { Link } from "react-router-dom";

import { Container, Header, Card } from "./styles";
import { memo } from "react";

function ContactsList({
  filteredContacts,
  orderBy,
  onToggleOrderBy,
  onDeleteContact,
}) {
  return (
    <Container>
      {filteredContacts.length > 0 && (
        <Header $orderBy={orderBy}>
          <button type="button" onClick={onToggleOrderBy}>
            Nome
            <img src={arrow} alt="Sort" />
          </button>
        </Header>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category.name && <small>{contact.category.name}</small>}
            </div>
            {contact.email && <span>{contact.email}</span>}
            {contact.phone && <span>{contact.phone}</span>}
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button" onClick={() => onDeleteContact(contact)}>
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string,
      phone: PropTypes.string,
      category: PropTypes.shape({
        name: PropTypes.string,
      }),
    }),
  ).isRequired,
  orderBy: PropTypes.string.isRequired,
  onToggleOrderBy: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default memo(ContactsList);
