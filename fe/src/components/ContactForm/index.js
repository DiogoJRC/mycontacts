import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import PropTypes from "prop-types";

import isEmailValid from "../../utils/isEmailValid";
import formatPhone from "../../utils/formatPhone";
import useErrors from "../../hooks/useErrors";

import { Form, ButtonContainer } from "./styles";

import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import FormGroup from "../FormGroup";

import CategoriesService from "../../services/CategoriesService";

const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const isFormValid = name && errors.length === 0;

  useImperativeHandle(ref, () => {
    return {
      setFieldsValues: (contact) => {
        setName(contact.name);
        setEmail(contact.email);
        setPhone(contact.phone);
        setCategoryId(contact.category_id);
      },
    };
  }, []);

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesList = await CategoriesService.listCategories();

        setCategories(categoriesList);
      } catch {
      } finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();
  }, []);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: "name", message: "Nome é obrigatório." });
    } else {
      removeError("name");
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: "email", message: "O formato do e-mail é inválido." });
    } else {
      removeError("email");
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmiting(true);

    await onSubmit({ name, email, phone, categoryId });

    setIsSubmiting(false);
    setName("");
    setEmail("");
    setPhone("");
    setCategoryId("");
  }

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
