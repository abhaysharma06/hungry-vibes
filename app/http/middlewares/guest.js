function guest(req,res,next){
    // if someone not registered and not able to login 
    if(!req.isAuthenticated()){
        return next()
    }
    // else redirect to index page
    return res.redirect('/')
}

module.exports = guest