const express = require("express");
const router = express.Router();
const rooms = require("../controllers/rooms.js");


router.get("/", rooms.getRoom);
router.get("/:id", rooms.getSpecificRoom);
router.post("/", rooms.createRoom);
router.put("/:id", rooms.updateRoom);
router.delete("/:id", rooms.deleteRoom);
module.exports = router;

