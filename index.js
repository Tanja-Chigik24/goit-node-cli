import contacts from "./db/contacts.js";
import { program } from "commander";

// TODO: рефакторити
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      // ...
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case "get":
      // ... id
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);

    case "add":
      // ... name email phone
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);

    case "remove":
      // ... id
      const deleteContact = await contacts.removeContact(id);
      return console.log(deleteContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

invokeAction(options);
