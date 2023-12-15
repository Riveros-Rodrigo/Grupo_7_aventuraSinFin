const { validationResult } = require('express-validator');
const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const { name, surname, birthday, gender, phone, subscription, address, city, province } = req.body;

            if (req.session.userLogin && req.session.userLogin.id) {
                const userId = req.session.userLogin.id;

                const user = await db.User.findByPk(userId);

                await db.User.update(
                    {
                        name: name.trim(),
                        surname: surname.trim(),
                        birthday,
                        gender,
                        phone,
                        subscription,
                        address,
                        city,
                        province,
                        image: req.file ? req.file.filename : user.image
                    },
                    {
                        where: {
                            id: userId
                        }
                    }
                );

                return res.redirect('/');
            } else {
                return res.status(401).send('Usuario no autenticado');
            }
        } else {
            if (req.session.userLogin && req.session.userLogin.id) {
                const userId = req.session.userLogin.id;

                const user = await db.User.findByPk(userId);

                if (user) {
                    return res.render('profile', {
                        ...user.dataValues,
                        errors: errors.mapped()
                    });
                } else {
                    return res.status(404).send('Usuario no encontrado');
                }
            } else {
                return res.status(401).send('Usuario no autenticado');
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error interno del servidor');
    }
};
