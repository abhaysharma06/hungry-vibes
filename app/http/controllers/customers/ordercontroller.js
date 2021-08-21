const Order = require('../../../models/order') 
const moment = require('moment')
const { session } = require('passport')
function ordercontroller (){
    return{
        store(req,res){
            
            /* 
               check weather the adress and 
               phone is validate for confirm the step.
            */
            
           const {phone, address} = req.body
           if(!phone || !address){
               req.flash('error','All field are required')
               return res.redirect('/cart')
           }
            
           /* order details stores in new new object  */ 
           
            const order = new Order({
               customerId: req.user._id,
               items: req.session.cart.items,
               phone: phone,
               address: address
           })
           
            /*  
                order details are saved and when succes 
                display msg of success order 
            */
            
            order.save().then(result=>{
            Order.populate(result,{path: 'customerId'},(err,placedOrder)=>{
            req.flash('success', 'Order placed successfully')
            
                // delete session/orders details from cart page      
                delete req.session.cart
                
                // Emit event when order is placed, then 
                //redirects to page where customer can trace order using sockect.io 
                const eventEmitter = req.app.get('eventEmitter')
                eventEmitter.emit('orderPlaced', placedOrder)
                return res.redirect('/customers/orders')
             })
        /* 
           if something went wrong the trow 
           error msg and redirect to cart page
        */
           }).catch(err=>{
               req.flash('error', 'Something Went Wrong')
               return res.redirect('/cart')
           })
        },
        /* 
            Customer can view generated order_id with
            the time of order made(using *** moment***)
        */
        async index(req,res){
            const orders = await Order.find({ customerId: req.user._id }, 
                null, {sort:{'createdAt': -1}})
            res.header('Cache-Conrol','no-cache, private, no-store, must-revalidate, max-stale, post-check=0 , pre-check=0')
            res.render('customers/orders',{orders : orders, moment:moment})
        },
        async show(req, res){
          const order = await Order.findById(req.params.id)

     /* only the autherized user can access this page */
          if(req.user._id.toString() === order.customerId.toString()){
              res.render('customers/singleOrder', {order: order})
          }else{
              res.redirect('/')
          }
        }
    }
}

module.exports = ordercontroller
