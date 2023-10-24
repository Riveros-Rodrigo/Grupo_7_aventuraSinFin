const {validationResult} = require('express-validator')
const db = require('../../database/models')
const {existsSync,unlinkSync} = require('fs')


module.exports = (req, res) => {
    //return res.send(req.files)
    const errors = validationResult(req); //guardo en la constante errors lo que devuelve validationResult

    if(errors.isEmpty()){ //si no hay error hace todo esto:

        const {country,hotel,category,flight,description,price,discount,package} = req.body;

        const categoryId = category === 'hotel' ? 1 : category === 'pais' ? 2 : null;


        db.Product.create({
            countryId: country.trim(),
            hotelId: hotel,
            categoryId: categoryId,
            flightId: flight,
            description: description.trim(),
            price: price,
            discount: discount,
            packageId: package
        })
            .then(product =>{
                if(req.file.length){
                    const images = req.file.map(file =>{
                        return{
                            file : file.filename,
                            productId : product.id
                        }
                    })

                    db.Image.bulkCreate(images,{
                        validate: true
                    }).then(response => console.log(response));
                }
                return res.redirect('/dashboard');
            })
            .catch(error => console.log(error))
    

    } else{
        // si en algun lugar del form hay error la imagen que subi se va a eliminar, de esta manera no se guarda basura en el proyecto
    if(req.file.length){
        req.file.forEach(file => {
            existsSync('./public/images/' + file.filename) && unlinkSync('./public/images/' + file.filename)
        });
    }

        const countries = db.Countrie.findAll({
            order : ['name']
        });
        const hotels = db.Hotel.findAll({
            order : ['name']
        });
        const packages = db.Package.findAll({
            order : ['name']
        });
    
        Promise.all([countries,hotels,packages])
        .then(([countries,hotels,packages]) =>{
            return res.render("productAdd", {
            countries,
            hotels,
            packages,
            errors: errors.mapped(),
            old: req.body
            })
        })
        .catch(error => console.log(error));
    }


}