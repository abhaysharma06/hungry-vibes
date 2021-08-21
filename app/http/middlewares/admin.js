/* middleware is create that if user is admin then can move to next page of as admin can access */
function admin(req,res,next){
    /* if user try to login with admin username
    and user is real/Authentic the move toward the admin access page  */
    if(req.isAuthenticated() && req.user.role == 'admin' ){
        return next()
    }
    // else redirect to login page
    return res.redirect('/login')
}

module.exports =  admin