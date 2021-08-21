const mongoose = require('mongoose');

const Schema = mongoose.Schema

/*
    schema created for menu page 
    *** the item which is neccessary can be written by required : true ***
*/
const menuSchema = new Schema({
    name:{
        type:String,
        required:true
    },    
    image:{
        type:String,
        required:true
    },   
    price:{
        type:Number,
        required:true
    },   
    size:{
        type:String,
        required:true
    }
})

/* creates a model of menuschema as Menu which use for export */
const Menu = mongoose.model('Menu',menuSchema)

module.exports = Menu;
