import PropTypes from "prop-types";
import { Container } from "./styles";

import checkCircleIcon from "../../../assets/images/icons/check-circle.svg";
import xCircleIcon from "../../../assets/images/icons/x-circle.svg";

export default function ToastMessage({ text, type }) {
  return (
    <Container type={type}>
      {type == "success" && <img src={checkCircleIcon} alt="Check" />}
      {type == "danger" && <img src={xCircleIcon} alt="X" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["default", "success", "danger"]),
};

ToastMessage.defaultProps = {
  type: "default",
};
