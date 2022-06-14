const express = require("express");
const router = express.Router();
const { createContact, getContact, getSpecificContact, updateContact, deleteContact
} = require("../controllers/bookings.js");


router.get("/", getContact);
router.get("/:id", getSpecificContact);
router.post("/", createContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);
module.exports = router;
