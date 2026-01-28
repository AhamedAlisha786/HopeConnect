const express = require("express");
const { registerOrphanage,loginOrphanage } = require("../controller/controller");
const {Donorregister,Donorlogin} = require("../controller/donor");
const {createNeed} = require("../controller/needs");
const {createSuccessStory} = require("../controller/success");

const router = express.Router();

router.post("/register", registerOrphanage);
router.post("/login", loginOrphanage);
router.post("/donor-register", Donorregister);
router.post("/donor-login", Donorlogin);
router.post("/create-need", createNeed);
router.post("/create-successstory", createSuccessStory);

module.exports = router;
