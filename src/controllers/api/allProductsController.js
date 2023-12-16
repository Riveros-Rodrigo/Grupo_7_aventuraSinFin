const db = require("../../database/models");

const getAllProducts = async (req,res)=>{
    try {
        const products = await db.Product.findAll({
            include: ['hotel','countrie']
        });

        const productsWithURLImages = products.map(product => {
            //vuelvo una URL de las imagenes de PRODUCT.
            product.image = product.image ?  `${req.protocol}://${req.get('host')}/images/${product.image}` : null;

            //En el caso de ser un vuelo, o una estadía voy validando acorde al caso para ingresar a la imagen y convertirla en URL.
            if(product.countrie){
                product.countrie.image = product.countrie.image ?  `${req.protocol}://${req.get('host')}/images/${product.countrie.image}` : null;
            };

            if(product.hotel){
                product.hotel.image = product.hotel.image ?  `${req.protocol}://${req.get('host')}/images/${product.hotel.image}` : null;
            };

            return product
        });


        //logica para contar cuantos vuelos, estadias y paquetes existen
        //Estos datos se podrían usar en el dashboard.
        let vuelos=0;
        let estadias =0;
        let paquetes =0;

        products.map(product=>{
            if(product.countrie && !product.hotel){
                vuelos +=1;
            };
            if(product.hotel && !product.countrie){
                estadias+=1;
            };
            if(product.hotel && product.countrie){
                paquetes+=1;
            };

        });
        

        return res.status(200).json({
            ok: true,
            data: productsWithURLImages,
            count: {vuelos,estadias,paquetes}
        });

    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "No se pudo traer los productos",
          });
    }
};

module.exports = getAllProducts