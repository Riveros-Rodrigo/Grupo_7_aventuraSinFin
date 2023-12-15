const express = require("express");
const uploadProfile = require('../middlewares/uploadProfile')
const router = express.Router();

const {
  register,
  processRegister,
  login,
  processLogin,
  profile,
  updateProfile,    
  shoppingCart,
  logout,
} = require("../controllers/usersController");

const registerValidator = require("../validations/registerValidator");
const loginValidator = require("../validations/loginValidator");
const checkUserLogin = require("../middlewares/checkUserLogin");
const checkNotUserLogin = require("../middlewares/checkNotUserLogin");
const profileValidator = require("../validations/profileValidator");

router
    .get("/register",checkNotUserLogin, register)
    .post("/register",registerValidator, processRegister)
    .get("/login", checkNotUserLogin, login)
    .post("/login",loginValidator, processLogin)
    .get("/profile",checkUserLogin, profile)
    .put("/update-profile",uploadProfile.single('image'), profileValidator, updateProfile)
    .get('/shoppingCart', shoppingCart)
    .get("/logout",logout)


module.exports = router;