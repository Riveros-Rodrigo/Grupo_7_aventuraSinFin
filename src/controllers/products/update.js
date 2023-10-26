const { unlinkSync, existsSync } = require("fs");
const db = require("../../database/models");

module.exports = (req, res) => {
  const id = req.params.id;
  const { countrie,hotel,categorie,flight,description,price,discount,package } = req.body;

  db.Product.findByPk(id, {
    include: ["images"],
  })
    .then((product) => {
      req.files.image &&
        existsSync(`./public/images/${product.image}`) &&
        unlinkSync(`./public/images/${product.image}`);

      db.Product.update(
        {
        categoryId : categorie,
        countryId : countrie,
        hotelId : hotel, 
        flightId : flight,
        description : description.trim(),
        price,
        discount : discount || 0,
        packageId : package,
        image : req.files.image ? req.files.image[0].filename : product.image,
        },
        {
          where: {
            id,
          },
        }
      ).then(() => {
        if (req.files.images) {
          product.images.forEach((image) => {
            existsSync(`./public/images/${image.file}`) &&
              unlinkSync(`./public/images/${image.file}`);
          });

          db.Image.destroy({
            where: {
              productId: id,
            },
          }).then(() => {
            const images = req.files.images.map((file) => {
              return {
                file: file.filename,
                main: false,
                productId: product.id,
              };
            });
            db.Image.bulkCreate(images, {
              validate: true,
            }).then((response) => {
              return res.redirect("/dashboard");
            });
          });
        } else {
          return res.redirect("/dashboard");
        }
      });
    })
    .catch((error) => console.log(error));
};
