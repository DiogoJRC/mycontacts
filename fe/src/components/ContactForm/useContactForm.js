import { useEffect, useImperativeHandle, useState } from "react";

import isEmailValid from "../../utils/isEmailValid";
import formatPhone from "../../utils/formatPhone";
import useErrors from "../../hooks/useErrors";

import CategoriesService from "../../services/CategoriesService";
import useSafeAsyncState from "../../hooks/useSafeAsyncState";

export default function useContactForm(onSubmit, ref) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useSafeAsyncState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useSafeAsyncState(true);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const isFormValid = name && errors.length === 0;

  useImperativeHandle(ref, () => {
    return {
      setFieldsValues: (contact) => {
        setName(contact.name ?? "");
        setEmail(contact.email ?? "");
        setPhone(formatPhone(contact.phone ?? ""));
        setCategoryId(contact.category.id ?? "");
      },
      resetFields: () => {
        setName("");
        setEmail("");
        setPhone(formatPhone(""));
        setCategoryId("");
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
  }, [setCategories, setIsLoadingCategories]);

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
  }

  return {
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
  };
}
