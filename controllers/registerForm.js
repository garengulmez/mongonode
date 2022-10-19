const securePass = require("../helpers/securePass")
const User = require("../schemas/usersSchema")


function getRegisterForm(req, res, next) {
    res.render("registerForm")
  
  };

//procesamos el  form de register -> Crear nuevo usuario
async function sendRegisterForm(req, res, next) {
    const { name, lastName, email, pass } = req.body;
    
    const password = await securePass.encrypt(pass)
  
    const newUser = new User({
      name, lastName, email, password
    })
    const usr = {
      id: newUser._id,
      name: newUser.name,
      lastName: newUser.lastName
    }
    newUser.save((err) => {
      if (!err) {
        req.session.user = usr
        res.redirect("/sesion")
  
      } else {
        res.render("registerForm", { message: "Ya existe un registro con ese email" })
      }
    })
  };


  module.exports = { getRegisterForm, sendRegisterForm }

