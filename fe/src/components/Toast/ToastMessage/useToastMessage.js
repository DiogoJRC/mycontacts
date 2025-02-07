import { useEffect } from "react";

import useAnimatedUnmount from "../../../hooks/useAnimatedUnmount";

export default function useToastMessage(message, onRemoveMessage, isLeaving) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(!isLeaving);

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

  return { handleRemoveToast, shouldRender, animatedElementRef };
}
