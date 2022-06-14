const express = require("express");
const router = express.Router();
const contact = require("../controllers/contact.js");


router.get("/", contact.getContact);
router.get("/:id", contact.getSpecificContact);
router.post("/", contact.createContact);
router.put("/:id", contact.updateContact);
router.delete("/:id", contact.deleteContact);
module.exports = router;
