const securePass = require("../helpers/securePass")
const User = require("../schemas/usersSchema")


//mostrar form de login
function getLoginForm(req, res, next) {
  res.render("loginForm"
    // style: "navbar.css"
)
  
};

//procesar form de login
async function sendLoginForm(req, res, next) {
  const { email, pass } = req.body;
  const user = await User.find().where({ email })

  if (!user.length) {
    return res.render("loginForm", { message: "Usuario o contraseña incorrectos" })
  };
  if (await securePass.decrypt(pass, user[0].password)) {
    const usr = {
      id: user[0]._id,
      name: user[0].name,
      lastName: user[0].lastName
    }
    req.session.user = usr
    // res.render("sesion", { user: `${req.session.user.name} ${req.session.user.lastName}`, id: req.session.user.id })
    res.redirect("/sesion")
  } else return res.render("loginForm", { message: "Usuario o contraseña incorrectos" })
};



module.exports = { getLoginForm, sendLoginForm }

