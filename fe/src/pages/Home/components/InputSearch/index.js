import PropTypes from "prop-types";
import { Container } from "./styles";

export default function InputSearch({ value, onChange }) {
  return (
    <Container>
      <input
        type="text"
        placeholder="Pesquisar contato..."
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}

InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
