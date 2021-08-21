const { renderSync } = require('sass')
const order = require('../../../models/order')

function statusController(){
    return{

      /* order_id and status details get recived  */

        update(req,res){
          order.updateOne({_id: req.body.orderId}, {status: req.body.status},(err,data)=>{
            if(err){
               return res.redirect('/admin/orders') 
            }  
            // Emit event which update the changes made in order update socket
            const eventEmitter = req.app.get('eventEmitter')
            eventEmitter.emit('orderUpdated', {id: req.body.orderId, status: req.body.status})
            res.redirect('/admin/orders')
          })        
        }
    }
}

module.exports = statusController