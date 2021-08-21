const Menu = require('../../models/menu')

function homeController(){
    return{
      
       /* factory function as it returns object (jucies) */ 
        async index(req,res){
            const juices = await Menu.find()
            return res.render('home',{juices:juices});
         }
        }
    }


module.exports = homeController;