import { Link } from "react-router-dom";

import {
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
  Card,
} from "./styles";

import arrow from "../../assets/images/arrow.svg";
import edit from "../../assets/images/edit.svg";
import trash from "../../assets/images/trash.svg";

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <h2>3 Contatos</h2>
        <Link to="/new">Novo contato</Link>
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
          <Link to="/edit/1">
            <img src={edit} alt="Edit" />
          </Link>
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
          <Link to="/edit/2">
            <img src={edit} alt="Edit" />
          </Link>
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
          <Link to="/edit/3">
            <img src={edit} alt="Edit" />
          </Link>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>
    </Container>
  );
}
