import PropTypes from "prop-types";

import { Container } from "./styles";

import checkCircleIcon from "../../../assets/images/icons/check-circle.svg";
import xCircleIcon from "../../../assets/images/icons/x-circle.svg";
import useToastMessage from "./useToastMessage";

export default function ToastMessage({
  message,
  isLeaving,
  onRemoveMessage,
  onAnimationEnd,
}) {
  const { handleRemoveToast, animatedElementRef } = useToastMessage(
    message,
    isLeaving,
    onRemoveMessage,
    onAnimationEnd,
  );

  return (
    <Container
      ref={animatedElementRef}
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      $isLeaving={isLeaving}
    >
      {message.type == "success" && <img src={checkCircleIcon} alt="Check" />}
      {message.type == "danger" && <img src={xCircleIcon} alt="X" />}
      <strong>{message.text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["default", "success", "danger"]),
    duration: PropTypes.number,
  }).isRequired,
  isLeaving: PropTypes.bool.isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
  onAnimationEnd: PropTypes.func.isRequired,
};
