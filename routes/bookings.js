const express = require('express');
const router = express.Router();
const {
  getBookedRoom,

} = require('../controllers/bookings.js');
router.get('/', getBookedRoom);
router.get('/:id', function (req, res, next) {
  res.send('Read route : ' + req.params.id)
  // res.json(bookings)
});
router.post('/', (req, res, next) => {
  console.log(req.body);
  res.json({ message: 'Got a POST bookings request', data: req.body });
})
router.put('/:id', (req, res, next) => {
  res.send('Update request bookings : ' + req.params.id);
})
router.delete('/:id', (req, res, next) => {
  res.send('Deleted successfully booked room: ' + req.params.id);
})

module.exports = router;
