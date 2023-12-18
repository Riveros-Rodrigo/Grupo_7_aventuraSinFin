const db = require("../../database/models");

const getDetailProduct = async(req,res)=>{
    const {id} = req.params;

    try {
        const product = await db.Product.findByPk(id,{
             include: ['hotel','countrie']
         });

         if(product){
             const productWithURL = [product].map(product => {
                 product.image = product.image ?  `${req.protocol}://${req.get('host')}/images/${product.image}` : null;
         
                 if(product.countrie){
                     product.countrie.image = product.countrie.image ?  `${req.protocol}://${req.get('host')}/images/${product.countrie.image}` : null;
                 };
         
                 if(product.hotel){
                     product.hotel.image = product.hotel.image ?  `${req.protocol}://${req.get('host')}/images/${product.hotel.image}` : null;
                 };
         
                 return product
             });
             
             return res.status(200).json({
                 ok: true,
                 data: productWithURL,
             });     
         }else{
            throw new Error('El producto no existe')
         }

    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "No se pudo traer el producto",
          });
    }
};

module.exports=getDetailProduct;