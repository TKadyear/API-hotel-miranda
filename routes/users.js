const express = require('express');
const router = express.Router();
const users = require("../public/data/users.json");


router.get('/', function (req, res, next) {
  res.json(users);
});
router.get('/:id', function (req, res, next) {
  res.send('Read route : ' + req.params.id)
});
router.post('/', (req, res, next) => {
  res.send('Got a POST Users request');
})
router.put('/:id', (req, res, next) => {
  res.send('Update route : ' + req.params.id)
})
router.delete('/:id', (req, res, next) => {
  res.send('Delete route : ' + req.params.id)
})

module.exports = router;
