const express = require('express');
const router = express.Router();
const contact = require("../public/data/contact.json");


router.get('/', function (req, res, next) {
  res.json(contact);
});
router.post('/', (req, res, next) => {
  res.send('Got a POST request');
})
router.put('/', (req, res, next) => {
  res.send('Update request');
})
router.delete('/', (req, res, next) => {
  res.send('Deleted successfully');
})

module.exports = router;
