import { useEffect, useRef } from "react";

export default function useToastMessage(
  message,
  isLeaving,
  onRemoveMessage,
  onAnimationEnd,
) {
  const animatedElementRef = useRef(null);

  useEffect(() => {
    const refElement = animatedElementRef.current;

    function handleAnimationEnd() {
      onAnimationEnd(message.id);
    }

    if (isLeaving) {
      refElement.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (refElement) {
        refElement.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, [isLeaving, message.id, onAnimationEnd]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return { handleRemoveToast, animatedElementRef };
}
