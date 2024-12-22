const { uuid } = require("uuidv4");

const contacts = [
  {
    id: uuid(),
    name: "Diogo",
    email: "diogo@mail.com",
    phone: "1234567890",
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
