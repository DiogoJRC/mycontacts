import ToastMessage from "../ToastMessage";
import { Container } from "./styles";
import useToastContainer from "./useToastContainer";

export default function ToastContainer() {
  const { handleRemoveMessage, renderList } = useToastContainer();

  return (
    <Container>
      {renderList((message, { isLeaving, animatedRef }) => (
        <ToastMessage
          key={message.id}
          message={message}
          isLeaving={isLeaving}
          onRemoveMessage={handleRemoveMessage}
          animatedRef={animatedRef}
        />
      ))}
    </Container>
  );
}
