const User = require("../schemas/usersSchema")
const securePass = require("../helpers/securePass")




async function getSettings(req, res) {

    const user = await User.findById(req.session.user.id).lean()
    res.render("editUserForm", { user })
  }
  async function sendSettings(req, res) {
    try {
      await User.findByIdAndUpdate(req.session.user.id, req.body)
      res.redirect("/sesion")
    } catch (err) {
      res.render("editUserForm", { message: "Ocurrió un error, intenta nuevamente" })
    }
  }


  module.exports = { getSettings, sendSettings }