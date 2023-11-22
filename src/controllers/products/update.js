const { unlinkSync, existsSync } = require("fs");
const db = require("../../database/models");

module.exports = (req, res) => {
  const id = req.params.id;
  const { countrie,hotel,categorie,flight,description,price,discount,package } = req.body;

  db.Product.findByPk(id, {
    include: ["images"],
  })
    .then((product) => {
      req.files.images &&
        existsSync(`./public/images/${product.images}`) &&
        unlinkSync(`./public/images/${product.images}`);

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
        images : req.files.images ? req.files.images[0].filename : product.images,
        },
        {
          where: {
            id,
          },
        }
      ).then(() => {
        if (req.files.images) {
          product.images.forEach((images) => {
            existsSync(`./public/images/${images.file}`) &&
              unlinkSync(`./public/images/${images.file}`);
          });

          db.Images.destroy({
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
            db.Images.bulkCreate(images, {
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
