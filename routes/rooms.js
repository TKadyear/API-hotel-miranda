const express = require('express');
const router = express.Router();
const rooms = require("../public/data/rooms.json");


router.get('/', function (req, res, next) {
  res.json(rooms);
});
router.post('/', (req, res, next) => {
  res.send('Got a POST Rooms request');
})
router.put('/', (req, res, next) => {
  res.send('Update request Rooms');
})
router.delete('/', (req, res, next) => {
  res.send('Deleted successfully room');
})

module.exports = router;
