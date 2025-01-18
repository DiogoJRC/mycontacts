import { Card, Container, Header, ListContainer } from "./styles";

import arrow from "../../assets/images/arrow.svg";
import edit from "../../assets/images/edit.svg";
import trash from "../../assets/images/trash.svg";

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <h2>3 Contatos</h2>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            Nome
            <img src={arrow} alt="Sort" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Mateus Silva</strong>
            <small>Instagram</small>
          </div>
          <span>mateus@devacademy.com.br</span>
          <span>(41) 99999-9999</span>
        </div>
        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Mateus Silva</strong>
            <small>Instagram</small>
          </div>
          <span>mateus@devacademy.com.br</span>
          <span>(41) 99999-9999</span>
        </div>
        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Mateus Silva</strong>
            <small>Instagram</small>
          </div>
          <span>mateus@devacademy.com.br</span>
          <span>(41) 99999-9999</span>
        </div>
        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>
    </Container>
  );
}
