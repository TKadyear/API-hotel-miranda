const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.send("hello Users");
});
router.post('/', (req, res, next) => {
  res.send('Got a POST Users request');
})
router.put('/', (req, res, next) => {
  res.send('Update request Users');
})
router.delete('/', (req, res, next) => {
  res.send('Deleted successfully users');
})

module.exports = router;
