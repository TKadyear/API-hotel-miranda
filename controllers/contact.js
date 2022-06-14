const contact = require("../public/data/contact.json");

const getContact = ((req, res) => {
  res.json(contact);
});

const getSpecificContact = ((req, res) => {
  const id = Number(req.params.id);
  const contactMessage = contact.find(msg => msg.id === id);
  if (!contactMessage) {
    return res.status(404).send("Message not found");
  }
  res.json(contactMessage);
});

const createContact = ((req, res) => {
  const newContactMessage = {
    name: req.body.name,
    price: req.body.price
  };
  contact.push(newContactMessage);
  res.status(201).json(newContactMessage);
});

const updateContact = ((req, res) => {
  const id = Number(req.params.productID);
  const index = contact.findIndex(msg => { msg.id === id; });
  const updatedContact = {
    name: req.body.name,
    price: req.body.price
  };

  contact[index] = updatedContact;
  res.status(200).json("Contact updated");
});

const deleteContact = ((req, res) => {
  const id = Number(req.params.id);
  const index = contact.findIndex(msg => msg.id === id);
  contact.splice(index, 1);
  res.status(200).json("Contact deleted");
});

module.exports = {
  createContact,
  getContact,
  getSpecificContact,
  updateContact,
  deleteContact
};
