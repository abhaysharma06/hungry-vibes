const User = require('../../models/user'); 
const bcrypt = require('bcrypt');
const passport = require('passport');

function authController(){
    const _getRedirectUrl = (req) =>{
        return req.user.role === 'admin' ? '/admin/orders' : '/'
    }

    return{
        login(req,res){
            res.render('auth/login');
        },
         postlogin(req,res,next){
            
            const {email, password} =req.body
            // validation request
             if(!email || !password){
                req.flash('error', 'All fields are required')
                return res.redirect('/register')
            }
           
            passport.authenticate('local', (err,user, info)=>{
               if(err){
                   req.flash('error',info.message)
                   return next(err)
               }
               if(!user){
                   req.flash('error', info.message)
                   return res.redirect('/login')
               }
               req.login(user,  (err)=>{
                   if(err){
                       req.flash('error',info.message)
                       return next(err)
                   }
                  return res.redirect(_getRedirectUrl(req))
                 })
              })(req,res,next)
         },

        register(req,res){
            res.render('auth/register');
        },
        async postRegister(req,res){
            const {name,email,password} = req.body
 
            // validation request
            if(!name || !email || !password){
                req.flash('error', 'All fields are required')
                req.flash('name', name)
                req.flash('email', email)
                return res.redirect('/register')
            }

            // check if email exist aur not
            User.exists({email: email},(err,result)=>{
                if(result){
                    req.flash('error', 'Email already taken')
                    req.flash('name', name)
                    req.flash('email', email)
                    return res.redirect('/register')
                }
            })

            // hashed password
            const hasedPassword = await bcrypt.hash(password, 10)

            // Create a user
                const user = new User({
                name: name,
                email: email,
                password: hasedPassword
            })

            user.save().then((user)=>{
              //  login user
              return res.redirect('/')
            }).catch(err=>{
                req.flash('error','Something went wrong')
                return res.redirect('/register')
            })

        },
        logout(req,res){
            req.logout()
            return res.redirect('/login')
        }
    }
}

module.exports = authController;