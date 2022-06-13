const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.send("hello contact");
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
