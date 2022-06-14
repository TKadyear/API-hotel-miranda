const express = require("express");
const router = express.Router();
const rooms = require("../public/data/rooms.json");


router.get("/", function (req, res) {
  res.json(rooms);
});

router.get("/:id", function (req, res) {
  res.send("Read route : " + req.params.id);
});
router.post("/", (req, res) => {
  res.send("Got a POST Rooms request");
});
router.put("/:id", (req, res) => {
  res.send("Update route : " + req.params.id);
});
router.delete("/:id", (req, res) => {
  res.send("Delete route : " + req.params.id);
});

module.exports = router;
