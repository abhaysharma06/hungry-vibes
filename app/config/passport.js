const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')
const bcrypt = require('bcrypt')

 function init(passport){
       passport.use(new LocalStrategy({ usernameField: 'email'}, async(email,password,done )=>{
             //Login
             // check if email exist
             const user = await User.findOne({email: email})
             if(!user){
                 return done(null, false, { message: 'No user with this email'})
             }
        
           /*
                bcrypt also provide the compare method
                this method ***help to compare password without doing decoding of enycrepted password***
           */
           
             bcrypt.compare(password, user.password).then(match=>{
                /* if detail matched with details present in database for some user then       
                            ****** user successfully logged in *******
                */
                 if(match){
                     return done(null, user, {message: 'Logged in successfuly'})
                 }
              // if user failed to login then show such msg 
                 return done(null, false, {message: 'Wrong username and password'})
             }).catch(err=>{
              ///  if thing are not going well the show such msg
                 return done(null, false, {message: 'Something went wrong'})
             })

       }))
      /* 
          storing values in session after log in so that its easier to know 
          if user is logged in aur not (generally we store user_id here) 
      */
       passport.serializeUser((user,done)=>{
           done(null,user._id)
       })
     
   /* reciving what's ever saved in session */
       passport.deserializeUser((id,done)=>{
        // req.user
              User.findById({_id:id}, (err,user)=>{
                   done(err,user)
              })
       })

 }

module.exports = init;
