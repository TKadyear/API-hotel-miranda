const express = require('express');
const router = express.Router();
const bookings = require("../public/data/booking.json");

router.get('/', function (req, res, next) {
  res.json(bookings)
});
router.post('/', (req, res, next) => {
  res.send('Got a POST bookings request');
})
router.put('/', (req, res, next) => {
  res.send('Update request bookings');
})
router.delete('/', (req, res, next) => {
  res.send('Deleted successfully booked room');
})

module.exports = router;
