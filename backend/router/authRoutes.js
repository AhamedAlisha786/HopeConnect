const express = require("express");
const { registerOrphanage,loginOrphanage } = require("../controller/controller");

const router = express.Router();

router.post("/register", registerOrphanage);
router.post("/login", loginOrphanage);

module.exports = router;
