const User = require("../schemas/usersSchema")
const securePass = require("../helpers/securePass")





async function deleteUser(req, res) {
    try {
      await User.findByIdAndDelete(req.session.user.id)
      req.session.destroy()
      res.redirect("/")
    } catch (err) {
      res.render("editUserForm", { message: "Ocurrió un error, intenta nuevamente" })
    }
  }
  // //validate email
  // async function validateEmail(req, res) {
  //   res.send("email varification in database")
  // }
  
  //logout
  function logout(req, res) {
    req.session.destroy()
    res.redirect("/");
  }


  module.exports = { deleteUser, logout }
