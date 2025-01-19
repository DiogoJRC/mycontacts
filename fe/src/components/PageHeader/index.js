import { Link } from "react-router-dom/cjs/react-router-dom";
import PropTypes from "prop-types";

import { Container } from "./styles";
import arrow from "../../assets/images/arrow.svg";

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Back" />
        Voltar
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
