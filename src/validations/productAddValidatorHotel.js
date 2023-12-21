const { check } = require("express-validator");

module.exports = [
  check("name").notEmpty().withMessage("Es obligatorio agregar la estadia"),
  check("description")
    .notEmpty()
    .withMessage("La descripción es requerida")
    .bail()
    .isLength({
      min: 20,
      max: 300,
    })
    .withMessage("La descripción debe tener entre 20 y 300 caracteres"),
  check("phone").notEmpty().withMessage("Debes indicar el teléfono").bail(),
  check("address")
    .notEmpty()
    .withMessage("Es obligatorio agregar la dirección"),
  check("city").notEmpty().withMessage("La ciudad es requerida"),
  check("country").notEmpty().withMessage("El país es requerido"),
  check("images")
    .custom((value, { req }) => {
      if (req.file) {
        return true;
      }
      return false;
    })
    .withMessage("No has subido ninguna imagen"),
];
