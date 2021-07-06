const Menu = require('../../models/menu')

function homeController(){
    return{
      
        
        async index(req,res){
            const juices = await Menu.find()
            return res.render('home',{juices:juices});
         }
        }
    }


module.exports = homeController;