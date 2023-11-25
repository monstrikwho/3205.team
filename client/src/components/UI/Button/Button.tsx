import classes from "./Button.module.sass";

export default function Button() {
  return (
    <button className={classes.btn} type="submit">
      Отправить
    </button>
  );
}
