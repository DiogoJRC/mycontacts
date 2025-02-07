import ToastMessage from "../ToastMessage";
import { Container } from "./styles";
import useToastContainer from "./useToastContainer";

export default function ToastContainer() {
  const { handleRemoveMessage, handleAnimationEnd, renderList } =
    useToastContainer();

  return (
    <Container>
      {renderList((message, { isLeaving }) => (
        <ToastMessage
          key={message.id}
          message={message}
          isLeaving={isLeaving}
          onRemoveMessage={handleRemoveMessage}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </Container>
  );
}
