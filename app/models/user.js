const mongoose = require('mongoose');

const Schema = mongoose.Schema
/*
    schema created for menu page 
    *** the item which is neccessary can be written by required : true ***
*/
const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },    
     // email_id unique for every user; 
    email:{
        type:String,
        required:true,
        unique:true
    },   
    password:{
        type:String,
        required:true
    },   
    role:{
        type:String,
        default: 'customer'
    }
},{timestamps:true})

/* creates a model of userschema as User which use for export */
const User = mongoose.model('User',userSchema)

module.exports = User;
