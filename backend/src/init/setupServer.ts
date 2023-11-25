import express from "express";
const app = express();
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("../routes/contacts.ts"));

app.listen(process.env.PORT, () => {
  console.log("Server up on PORT: " + process.env.PORT);
});
