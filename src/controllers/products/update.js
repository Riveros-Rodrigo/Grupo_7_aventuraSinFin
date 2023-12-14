const { existsSync, unlinkSync } = require("fs");
const db = require("../../database/models");

module.exports = async (req, res) => {
  try {
    const id = req.params.id;
    const {  countryId, description, price, discount } = req.body;
    
    // Obtengo el producto con sus datos actuales
    const product = await db.Product.findByPk(id);
    
    // Verifica si el producto existe antes de continuar
    if (!product) {
      return res.status(404).send("Producto no encontrado");
    }

    // Elimino la imagen anterior si se proporciona una nueva y si la imagen anterior existe
    if (req.file && req.file.image && existsSync(`./public/images/${product.image}`)) {
      unlinkSync(`./public/images/${product.image}`);
    }

    // Actualizar el producto
    await db.Product.update(
      {
        price,
        discount,
        countryId,
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
};
