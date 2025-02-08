import PropTypes from "prop-types";
import { StyledButton } from "./styles";

import Spinner from "../Spinner";

export default function Button({
  type = "button",
  disabled = false,
  isLoading = false,
  children,
  danger = false,
  onClick = undefined,
}) {
  return (
    <StyledButton
      type={type}
      $danger={danger}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  danger: PropTypes.bool,
  onClick: PropTypes.func,
};
