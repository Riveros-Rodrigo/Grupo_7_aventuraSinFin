const {validationResult} = require('express-validator');
const { readJSON } = require('../../data');

module.exports = (req, res) => {
    const errors = validationResult(req);

    if(errors.isEmpty()){
        //si llego acá es porque no hay errores
        const users = readJSON('users.json');
        const user = users.find(user => user.email === req.body.email);
        const {id, name, rol} = user;

        req.session.userLogin = {
            id,
            name,
            rol
        }
        //si va todo bien me manda al home
        return res.redirect('/')
    } else{
        return res.render('login',{
            errors: errors.mapped()         
        })
    }
}