const rooms = require("../public/data/rooms.json");

const getRoom = ((req, res) => {
  res.json(rooms);
});

const getSpecificRoom = ((req, res) => {
  const id = Number(req.params.id);
  const roomsMessage = rooms.find(room => room.id === id);
  if (!roomsMessage) {
    return res.status(404).send("Message not found");
  }
  res.json(roomsMessage);
});

const createRoom = ((req, res) => {
  const newRoomMessage = {
    name: req.body.name,
    price: req.body.price
  };
  rooms.push(newRoomMessage);
  res.status(201).json(newRoomMessage);
});

const updateRoom = ((req, res) => {
  const id = Number(req.params.productID);
  const index = rooms.findIndex(room => { room.id === id; });
  const updatedRoom = {
    name: req.body.name,
    price: req.body.price
  };

  rooms[index] = updatedRoom;
  res.status(200).json("Room updated");
});

const deleteRoom = ((req, res) => {
  const id = Number(req.params.id);
  const index = rooms.findIndex(room => room.id === id);
  rooms.splice(index, 1);
  res.status(200).json("Room deleted");
});

module.exports = {
  createRoom,
  getRoom,
  getSpecificRoom,
  updateRoom,
  deleteRoom
};
