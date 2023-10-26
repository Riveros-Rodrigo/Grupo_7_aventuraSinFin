// const db = require('../../database/models')
// const path = require("path");

// const controllerDelete = {

// remove: (req, res) => {
//     db.Product.destroy({
// 		where : {
// 			id : req.params.id
// 		}
// 	}).then(response => {
// 		console.log(response);
// 		return res.redirect("/dashboard");
// 	})
// 	.catch((error) => console.log(error));
    
//   },
// };

// module.exports = controllerDelete

const { readJSON, writeJSON } = require("../../data")

module.exports = (req,res) => {
    const products = readJSON('products.json');
    const id = req.params.id;

    const productsModify = products.filter(product => product.id !== id);

    writeJSON(productsModify, 'products.json')

    return res.redirect('/admin')
}