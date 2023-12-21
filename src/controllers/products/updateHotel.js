const { existsSync, unlinkSync } = require("fs");
const {validationResult} = require('express-validator');

const db = require("../../database/models");

module.exports = async (req, res) => {
  const errors = validationResult(req);

  if(errors.isEmpty()){

    try {
      const id = req.params.id;
      const { hotelId, name, description, price, discount } = req.body;
      
      // Obtengo el producto con sus datos actuales
      const product = await db.Product.findByPk(id);
      
      // Elimino la imagen anterior si se proporciona una nueva y si la imagen anterior existe
      if (req.files && req.file.image && existsSync(`./public/images/${product.image}`)) {
        unlinkSync(`./public/images/${product.image}`);
      }

      // Actualizar el producto
      await db.Product.update(
        {
          name: name.trim(),
          price,
          discount,
          hotelId,
          description: description.trim(),
          image: req.file ? req.file.filename : product.image,
        },
        {
          where: {
            id,
          },
        }
      );
      return res.redirect('/dashboard')
    } catch (error) {
      console.log(error);
      return res.status(500).send("Internal Server Error");
    }
  } else{
    //hacemos los llamados correspondientes para renderizar la vista productAdd.
    const countries = await db.Countrie.findAll({
      order : ['name']
    });

    const product = await db.Product.findByPk(req.params.id);


    return res.render("productEditHotel", {
      countries,
      errors : errors.mapped(),
      ...product.dataValues,
    });
  }
};
