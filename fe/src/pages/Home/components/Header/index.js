import PropTypes from "prop-types";
import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function Header({
  hasError,
  qtyOfContacts,
  qtyOfFilteredContacts,
}) {
  const alignment = hasError
    ? "flex-end"
    : qtyOfContacts < 1
      ? "center"
      : "space-between";

  return (
    <Container $justifyContent={alignment}>
      {!hasError && qtyOfContacts > 0 && (
        <h2>
          {qtyOfFilteredContacts} Contato
          {qtyOfFilteredContacts !== 1 && "s"}
        </h2>
      )}
      <Link to="/new">Novo contato</Link>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  qtyOfContacts: PropTypes.number.isRequired,
  qtyOfFilteredContacts: PropTypes.number.isRequired,
};
