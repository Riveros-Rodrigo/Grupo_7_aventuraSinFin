module.exports = (req,res,next) => {
    if(req.cookies.aventuraSinFin){
        req.session.userLogin = req.cookies.aventuraSinFin
    }
    next()
}