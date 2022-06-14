const express = require("express");
const router = express.Router();
const users = require("../controllers/users.js");


router.get("/", users.getUser);
router.get("/:id", users.getSpecificUser);
router.post("/", users.createUser);
router.put("/:id", users.updateUser);
router.delete("/:id", users.deleteUser);

module.exports = router;
