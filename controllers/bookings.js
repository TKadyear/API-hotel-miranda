const bookings = require("../public/data/booking.json");

const getBookings = ((req, res) => {
  res.json(bookings);
})

const getBookedRoom = ((req, res) => {
  const id = Number(req.params.id)
  const bookedRoom = bookings.find(room => room.id === id);

  if (!room) {
    return res.status(404).send('Booked Room not found');
  }
  res.json(bookedRoom);
})

const createProduct = ((req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  }
  products.push(newProduct)
  res.status(201).json(newProduct)
})

const updateProduct = ((req, res) => {
  const id = Number(req.params.productID)
  const index = products.findIndex(product => product.id === id)
  const updatedProduct = {
    id: products[index].id,
    name: req.body.name,
    price: req.body.price
  }

  products[index] = updatedProduct
  res.status(200).json('Product updated')
})

const deleteProduct = ((req, res) => {
  const id = Number(req.params.productID)
  const index = products.findIndex(product => product.id === id)
  products.splice(index, 1)
  res.status(200).json('Product deleted')
})

module.exports = {
  getBookedRoom,
}
