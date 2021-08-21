const mongoose = require('mongoose');

const Schema = mongoose.Schema

    /* creted schema for order page where  
      customer details are taken */
    /*
        schema created for menu page 
        *** the item which is neccessary can
         be written by required : true ***
    */

    
const orderSchema = new Schema({
    // customerId is different for every user  
    customerId:{ type: mongoose.Schema.Types.ObjectId,
                 ref: 'User',
                 required: true
    },
    items: {
        type: Object,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    paymentType:{
        type: String,
        default:'COD'
    },
    status:{
        type: String,
        default: 'order_placed'
    }    

},{timestamps:true})

/* creates a model of orderschema as Order which use for export */

const Order = mongoose.model('Order',orderSchema)

module.exports = Order;