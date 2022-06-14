const express = require("express");
const router = express.Router();
const { createBooking, getBookings, getBookedRoom, updateBooking, deleteBookedRoom } = require("../controllers/bookings.js");

router.get("/", getBookings);
router.get("/:id", getBookedRoom);
router.post("/", createBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBookedRoom);

module.exports = router;
