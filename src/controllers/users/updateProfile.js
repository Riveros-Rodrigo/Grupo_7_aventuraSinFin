const { readJSON, writeJSON } = require("../../data");
 const multer = require('multer');
 const path = require('path');

module.exports = (req,res) => {
    const users = readJSON('users.json')
    const {name,surname,birthday,telefono,genero} = req.body
    const userUpdated = users.map(user =>{
        if(user.id === req.session.userLogin.id){
            return {
                ...user,
                name : name.trim(),
                surname: surname.trim(),
                birthday,
                telefono,
                genero
            }
        }
        return user
    })
    writeJSON(userUpdated,"users.json");
    return res.redirect('/')
}
