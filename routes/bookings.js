const express = require("express");
const router = express.Router();
const bookings = require("../controllers/bookings.js");

router.get("/", bookings.getBookings);
router.get("/:id", bookings.getBookedRoom);
router.post("/", bookings.createBooking);
router.put("/:id", bookings.updateBooking);
router.delete("/:id", bookings.deleteBookedRoom);

module.exports = router;
