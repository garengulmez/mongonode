const validations = require("express-validator");
const { body, validationResult } = validations

const rules = [

    body("name")
    .notEmpty()
    .withMessage("Nombre es un campo obligatorio"),

    body("lastName")
    .notEmpty()
    .withMessage("Apellido es un campo obligatorio"),

    body("email")
    .notEmpty()
    .withMessage("Email es un campo obligatorio")
    .trim()
    .isEmail()
    .withMessage("El email tiene que ser válido")
    .normalizeEmail()
    .toLowerCase(),

    body("pass")
    .notEmpty()
    .withMessage("Password es um campo obligatorio")
    .trim()
    .isLength({min:7, max:20})
    .withMessage("El password tiene que tener un mínimo de 7 caracteres"),
    

    
    
   


(req, res, next) => {

   


const errors = validationResult(req);
if (!errors.isEmpty()) {
const arrWarnings = errors.array();

console.log(arrWarnings);
console.log(errors);





res.render("registerForm", { arrWarnings });
} else return next()
}
]


module.exports = rules;