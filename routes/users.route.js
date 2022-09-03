const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/users.controller.js")

router.route("/all").get(usersControllers.getAllUsers)
router.route("/random").get(usersControllers.getARandomUser)
router.route("/save").post(usersControllers.saveAUser)
router.route("/update/:id").patch(usersControllers.updateAUser)
router.route("/bulk-update").patch(usersControllers.updateMultipleUsers)
router.route("/delete/:id").delete(usersControllers.deleteAUser)

module.exports = router;
