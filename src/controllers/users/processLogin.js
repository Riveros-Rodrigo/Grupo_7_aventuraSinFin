const {validationResult} = require('express-validator')

module.exports = (req, res) => {
    const errors = validationResult(req);

    if(errors.isEmpty()){
        return res.send('usuario logueado!')
    } else{
        return res.send(errors.mapped())
    }

}