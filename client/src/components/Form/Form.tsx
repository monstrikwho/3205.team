import React, { useContext } from "react";

import Button from "../UI/Button/Button";
import InputField from "../UI/Input/Input";

import { fetchContact } from "./Form.service";
import { FormFields } from "./Form.types";
import classes from "./Form.module.sass";

import { MyContext } from "../../contexts/useContextProvider";

export default function Form() {
  const { updateContactList } = useContext(MyContext)!;

  const handleSubmit: React.FormEventHandler<
    HTMLFormElement & FormFields
  > = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const { email, number } = form;

    const res = await fetchContact({
      email: email.value,
      number: number.value,
    });

    if (res) {
      updateContactList(res.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.title}>Поиск контактов</div>
      <div className={classes.subtitle}>
        Пожалуйста, введите Email и номер телефона
      </div>
      <div className={classes.inputWrapper}>
        <InputField
          name="email"
          type="email"
          label="Email"
          placeholder="example@email.com"
          required={true}
        />
        <InputField
          name="number"
          type="tel"
          label="Phone number"
          placeholder="00-00-00"
        />
        <Button />
      </div>
    </form>
  );
}
