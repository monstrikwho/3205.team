import DB from "../database/data.json";

interface Contact {
  email: string;
  number: string;
}

interface FindParametrs {
  email: string;
  number?: string | undefined;
}

class ContactsController {
  static find({ email, number }: FindParametrs): Contact[] {
    const results = DB.filter((user) => {
      return user.email === email && (!number || user.number === number);
    });

    return results;
  }
}

export default ContactsController;
