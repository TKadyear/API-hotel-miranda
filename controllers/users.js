const users = require("../public/data/users.json");

const getUser = ((req, res) => {
  res.json(users);
});

const getSpecificUser = ((req, res) => {
  const id = Number(req.params.id);
  const users = users.find(user => user.id === id);
  if (!users) {
    return res.status(404).send(" not found");
  }
  res.json(users);
});

const createUser = ((req, res) => {
  const newUser = {
    name: req.body.name,
    price: req.body.price
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

const updateUser = ((req, res) => {
  const id = Number(req.params.productID);
  const index = users.findIndex(user => { user.id === id; });
  const updatedUser = {
    name: req.body.name,
    price: req.body.price
  };

  users[index] = updatedUser;
  res.status(200).json("User updated");
});

const deleteUser = ((req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(user => user.id === id);
  users.splice(index, 1);
  res.status(200).json("User deleted");
});

module.exports = {
  createUser,
  getUser,
  getSpecificUser,
  updateUser,
  deleteUser
};
