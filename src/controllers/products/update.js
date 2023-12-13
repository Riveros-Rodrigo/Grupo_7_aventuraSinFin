const { existsSync, unlinkSync } = require("fs");
const db = require("../../database/models");

module.exports = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, countryId, section, description, price, discount } = req.body;
    
    
    // Actualizar el producto
    await db.Product.update(
      {
        name: name.trim(),
        price,
        discount,
        countryId,
        sectionId: section,
        description: description.trim(),
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
