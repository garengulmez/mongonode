const validations = require("express-validator");
const { body, validationResult } = validations

const rules = [
    body("name")
    .notEmpty().withMessage("Nombre es un Campo obligatorio"),
    body("lastName")
    .notEmpty().withMessage("Apellido es un Campo obligatorio"),
    body("email")
    .notEmpty().withMessage("Email es un campo obligatorio")
    .isEmail().withMessage("Ingresar un email válido"),


(req, res, next) => {
/* Encontramos los errores de validación en la request y los
envolvemos en un objeto con
funciones muy útiles que también provee express-validator*/
const errors = validationResult(req);
if (!errors.isEmpty()) {
const formData = req.body;
const arrWarnings = errors.array();
console.log(arrWarnings);

res.render("registerForm", { arrWarnings, formData });
//aquí sigue el código de nuestro controlador POST
} else return next()
}
]


module.exports = rules;