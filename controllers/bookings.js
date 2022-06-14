const bookings = require("../public/data/booking.json");

const getBookings = (req, res) => {
  return res.json(bookings);
};

const getBookedRoom = (req, res) => {
  const id = Number(req.params.id);
  const bookedRoom = bookings.find(room => room.id === id);
  if (!bookedRoom) {
    return res.status(404).send("Booked Room not found");
  }
  return res.json(bookedRoom);
};

const createBooking = (req, res) => {
  const newBookedRoom = {
    name: req.body.name,
    price: req.body.price
  };
  bookings.push(newBookedRoom);
  return res.status(201).json(newBookedRoom);
};

const updateBooking = (req, res) => {
  const id = Number(req.params.productID);
  const index = bookings.findIndex(room => { room.id === id; });
  const updatedBooking = {
    name: req.body.name,
    price: req.body.price
  };

  bookings[index] = updatedBooking;
  return res.status(200).json("Booking updated");
};

const deleteBookedRoom = (req, res) => {
  const id = Number(req.params.id);
  const index = bookings.findIndex(room => room.id === id);
  bookings.splice(index, 1);
  return res.status(200).json("Booking deleted");
};

module.exports = {
  createBooking,
  getBookings,
  getBookedRoom,
  updateBooking,
  deleteBookedRoom
};
