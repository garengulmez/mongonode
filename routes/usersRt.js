const router = require('express').Router()
const rules = require('../config/validation')
const users = require("../controllers/loginForm")
const registerUsers = require("../controllers/registerForm")
const editSettings = require("../controllers/settingsForm")
const deleteUser = require("../controllers/deleteLogout")
const auth = require("../helpers/auth")


router.get("/login", users.getLoginForm )
router.post("/login", users.sendLoginForm)
router.get("/register", registerUsers.getRegisterForm)
router.post("/register", rules, registerUsers.sendRegisterForm)
router.get("/settings", auth, editSettings.getSettings)
router.post("/settings", auth, editSettings.sendSettings)
router.get("/logout", deleteUser.logout)
// router.get("/validate", auth, deleteUser.validateEmail)
router.get("/delete", auth, deleteUser.deleteUser)


module.exports = router;