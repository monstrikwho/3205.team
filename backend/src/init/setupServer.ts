import express from "express";
const app = express();
import cors from "cors";

import contactsRouter from "../routes/contacts";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", contactsRouter);

app.listen(process.env.PORT, () => {
  console.log("Server up on PORT: " + process.env.PORT);
});
