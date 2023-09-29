 const { readJSON, writeJSON } = require("../../data");
 const multer = require('multer');
 const path = require('path');

  const storage = multer.diskStorage({
       destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', '..', 'public', 'images'));
       },
       filename: function (req, file, cb) {
           cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
       }
   });

 const upload = multer({ storage });

     module.exports = (req, res) => {
     const users = readJSON('users.json');
     const { 
         name, 
         surname, 
         birthday, 
         genero, 
         asiento, 
         suscripcion, 
         profilePicture 
     } = req.body;

     const updatedUser = users.map(user => {
        //  if (user.id === req.session.userLogin.id) {
         // if (user.id === req.session.userLogin.id) {
            // if (user.id && user.id === req.session.userLogin.id) {
             if (user && user.id && req.session.userLogin && req.session.userLogin.id && user.id === req.session.userLogin.id) {

             return {
                 ...user,
                 name: name ? name.trim() : name,
                 surname: surname ? surname.trim() : surname,
                 birthday: birthday || birthday,
                 genero: genero || genero,
                 asiento: asiento || asiento,
                 suscripcion: suscripcion || suscripcion,
                 profilePicture: req.file ? req.file.filename : profilePicture
             }
         }
         return user;
     });

     writeJSON(updatedUser, 'users.json');
    return res.redirect('/');
 };















// const { readJSON, writeJSON } = require("../../data");
// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//     destination : (req,file,callback) => {
//         return callback(null,'./public/images')
//     },
//     filename : (req,file,callback) => {
//         return callback(null, `${Date.now()}_users_${path.extname(file.originalname)}`)
//     }
// });


// // const storage = multer.diskStorage({
// //     destination: function (req, file, cb) {
// //         cb(null, path.join(__dirname, '..', 'public', 'images'));
// //     },
// //     filename: function (req, file, cb) {
// //         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
// //     }
// // });

// const upload = multer({ storage });

// const upload = require('../middleware/upload'); // Asegúrate de que la ruta sea correcta

// // ...

// router.post('/actualizar-perfil', upload.single('profilePicture'), (req, res) => {
//     // Tu código de actualización de perfil
// });


// module.exports = [upload.single('profilePicture'), (req, res) => {
//     const users = readJSON('users.json');
//     const { 
//         name, 
//         surname, 
//         birthday, 
//         genero, 
//         asiento, 
//         suscripcion
//     } = req.body;

//     const updatedUser = users.map(user => {
//         if (user.id === req.session.userLogin.id) {
//             return {
//                 ...user,
//                 name: name ? name.trim() : user.name,
//                 surname: surname ? surname.trim() : user.surname,
//                 birthday: birthday || user.birthday,
//                 genero: genero || user.genero,
//                 asiento: asiento || user.asiento,
//                 suscripcion: suscripcion || user.suscripcion,
//                 profilePicture: req.file ? req.file.filename : user.profilePicture
//             }
//         }
//         return user;
//     });

//     writeJSON(updatedUser, 'users.json');

//     return res.redirect('/users/profile');
// }];
