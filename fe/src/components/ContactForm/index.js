import { forwardRef } from "react";
import PropTypes from "prop-types";

import { Form, ButtonContainer } from "./styles";

import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import FormGroup from "../FormGroup";
import useContactForm from "./useContactForm";

const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const {
    isSubmiting,
    isFormValid,
    isLoadingCategories,
    name,
    email,
    phone,
    categoryId,
    categories,
    setCategoryId,
    getErrorMessageByFieldName,
    handleSubmit,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
  } = useContactForm(onSubmit, ref);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName("name")}>
        <Input
          $error={getErrorMessageByFieldName("name")}
          type="text"
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
          disabled={isSubmiting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName("email")}>
        <Input
          $error={getErrorMessageByFieldName("email")}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          disabled={isSubmiting}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
          disabled={isSubmiting}
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
          disabled={isLoadingCategories || isSubmiting}
        >
          <option value="">Sem categoria</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid} isLoading={isSubmiting}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
});

// Para evitar o erro do eslint: Component definition is missing display name eslint(react/display-name)
ContactForm.displayName = "ContactForm";

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
