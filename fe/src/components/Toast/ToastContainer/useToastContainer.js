import { useEffect } from "react";

import { toastEventManager } from "../../../utils/toast";
import useAnimatedList from "../../../hooks/useAnimatedList";

export default function useToastContainer() {
  const {
    items: messages,
    setItems: setMessages,
    pendingRemovalItemsIds: pendingRemovalMessagesIds,
    handleRemoveItem: handleRemoveMessage,
    handleAnimationEnd,
  } = useAnimatedList();

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text, duration },
      ]);
    }

    toastEventManager.on("addtoast", handleAddToast);

    return () => toastEventManager.removeListener("addtoast", handleAddToast);
  }, [setMessages]);

  return {
    messages,
    pendingRemovalMessagesIds,
    handleRemoveMessage,
    handleAnimationEnd,
  };
}
