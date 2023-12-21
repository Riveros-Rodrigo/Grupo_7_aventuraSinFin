const { check } = require("express-validator");

module.exports = [
  check("date").notEmpty().withMessage("La fecha es obligatoria"),
  check("departure")
    .notEmpty()
    .withMessage("Es obligatorio el horario de partida"),
  check("arrival")
    .notEmpty()
    .withMessage("Es obligatorio el horario de arribo"),
  check("price").notEmpty().withMessage("El precio es requerido"),
  check("airline").notEmpty().withMessage("Debe indicar la areolínea"),
  check("destinity").notEmpty().withMessage("Debe indicar el destino"),
];
