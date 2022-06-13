const express = require('express');
const router = express.Router();
const rooms = require("../public/data/rooms.json");


router.get('/', function (req, res, next) {
  res.json(rooms);
});

router.get('/:id', function (req, res, next) {
  res.send('Read route : ' + req.params.id)
});
router.post('/', (req, res, next) => {
  res.send('Got a POST Rooms request');
})
router.put('/:id', (req, res, next) => {
  res.send('Update route : ' + req.params.id)
})
router.delete('/:id', (req, res, next) => {
  res.send('Delete route : ' + req.params.id)
})

module.exports = router;
