const { existsSync, unlinkSync } = require("fs");
const db = require("../../database/models");

module.exports = async (req, res) => {
  try {
    const id = req.params.id;

    const productToDelete = await db.Product.findByPk(id);

    if(productToDelete){
        existsSync(`./public/images/${productToDelete.image}`) &&
        unlinkSync(`./public/images/${productToDelete.image}`);
        await productToDelete.destroy();
        
        return res.redirect("/dashboard");
    }
   
  } catch (error) {
    console.log(error);
  }
};
