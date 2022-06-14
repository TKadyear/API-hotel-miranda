const express = require("express");
const router = express.Router();
const { createRoom, getRoom, getSpecificRoom, updateRoom, deleteRoom
} = require("../controllers/bookings.js");


router.get("/", getRoom);
router.get("/:id", getSpecificRoom);
router.post("/", createRoom);
router.put("/:id", updateRoom);
router.delete("/:id", deleteRoom);
module.exports = router;

