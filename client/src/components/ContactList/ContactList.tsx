import { useContext } from "react";

import { MyContext } from "../../contexts/useContextProvider";

import classes from "./ContactList.module.sass";

export default function ContactList() {
  const context = useContext(MyContext);

  if (!context) return null;

  const { contactList } = context;

  return (
    <div className={classes.contactList}>
      <div className={classes.title}>Список контактов</div>
      {contactList && contactList.length !== 0 ? (
        <ul>
          {contactList.map((item, key) => {
            return (
              <li key={key}>
                <div className={classes.contactInfo}>
                  <div>
                    <span>Email:</span>
                    {item.email}
                  </div>
                  <div>
                    <span>Номер телефона:</span>
                    {item.number}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={classes.subtitle}>Список контактов пуст</div>
      )}
    </div>
  );
}
