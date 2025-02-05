import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { Overlay, Container, Footer } from "./styles";

import Button from "../Button";
import ReactPortal from "../ReactPortal";

export default function Modal({
  danger,
  visible,
  isLoading,
  title,
  children,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
}) {
  const [shouldRender, setShouldRender] = useState(visible);
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlayRefElement = overlayRef.current;

    function handleAnimationEnd() {
      setShouldRender(false);
    }

    if (visible) {
      setShouldRender(true);
    } else if (!visible && overlayRefElement) {
      overlayRefElement.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (overlayRefElement) {
        overlayRefElement.removeEventListener(
          "animationend",
          handleAnimationEnd,
        );
      }
    };
  }, [visible]);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay ref={overlayRef} $isLeaving={!visible}>
        <Container $isLeaving={!visible} $danger={danger}>
          <h1>{title}</h1>

          <div className="modal-body">{children}</div>

          <Footer>
            <button
              type="button"
              className="cancel-button"
              onClick={onCancel}
              disabled={isLoading}
            >
              {cancelLabel}
            </button>
            <Button
              type="button"
              danger={danger}
              isLoading={isLoading}
              onClick={onConfirm}
            >
              {confirmLabel}
            </Button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  danger: false,
  isLoading: false,
  cancelLabel: "Cancelar",
  confirmLabel: "Confirmar",
};
