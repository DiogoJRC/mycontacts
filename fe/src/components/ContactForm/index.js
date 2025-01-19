import PropTypes from "prop-types";

import { Form, ButtonContainer } from "./styles";

import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import FormGroup from "../FormGroup";

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input type="text" placeholder="Nome" />
      </FormGroup>

      <FormGroup>
        <Input type="email" placeholder="E-mail" />
      </FormGroup>

      <FormGroup>
        <Input type="tel" placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value={1}>Instagram</option>
          <option value={1}>Instagram</option>
          <option value={1}>Instagram</option>
          <option value={1}>Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="button" disabled>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
