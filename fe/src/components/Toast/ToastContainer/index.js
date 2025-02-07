import ToastMessage from "../ToastMessage";
import { Container } from "./styles";
import useToastContainer from "./useToastContainer";

export default function ToastContainer() {
  const {
    messages,
    pendingRemovalMessagesIds,
    handleRemoveMessage,
    handleAnimationEnd,
  } = useToastContainer();

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          isLeaving={pendingRemovalMessagesIds.includes(message.id)}
          onRemoveMessage={handleRemoveMessage}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </Container>
  );
}
