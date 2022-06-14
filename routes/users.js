const express = require("express");
const router = express.Router();
const { createUser, getUser, getSpecificUser, updateUser, deleteUser
} = require("../controllers/bookings.js");


router.get("/", getUser);
router.get("/:id", getSpecificUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
