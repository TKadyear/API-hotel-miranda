const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.send("hello bookings");
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
