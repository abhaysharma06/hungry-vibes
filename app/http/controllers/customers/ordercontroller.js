const Order = require('../../../models/order') 
const moment = require('moment')
const { session } = require('passport')
function ordercontroller (){
    return{
        store(req,res){
           // validate request
           const {phone, address} = req.body
           if(!phone || !address){
               req.flash('error','All field are required')
               return res.redirect('/cart')
           }
           const order = new Order({
               customerId: req.user._id,
               items: req.session.cart.items,
               phone: phone,
               address: address
           })
           order.save().then(result=>{
             Order.populate(result,{path: 'customerId'},(err,placedOrder)=>{
                req.flash('success', 'Order placed successfully')
                delete req.session.cart
                // Emit 
                const eventEmitter = req.app.get('eventEmitter')
                eventEmitter.emit('orderPlaced', placedOrder)
                return res.redirect('/customers/orders')
             })

           }).catch(err=>{
               req.flash('error', 'Something Went Wrong')
               return res.redirect('/cart')
           })
        },
        async index(req,res){
            const orders = await Order.find({ customerId: req.user._id }, 
                null, {sort:{'createdAt': -1}})
            res.header('Cache-Conrol','no-cache, private, no-store, must-revalidate, max-stale, post-check=0 , pre-check=0')
            res.render('customers/orders',{orders : orders, moment:moment})
        },
        async show(req, res){
          const order = await Order.findById(req.params.id)

          // Authorize user
          if(req.user._id.toString() === order.customerId.toString()){
              res.render('customers/singleOrder', {order: order})
          }else{
              res.redirect('/')
          }
        }
    }
}

module.exports = ordercontroller