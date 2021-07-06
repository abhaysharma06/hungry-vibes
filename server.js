require('dotenv').config()
const express = require('express');
const app = express()
const path = require('path');
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const PORT = process.env.PORT || 3800;
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
const MongoDbStore = require('connect-mongo')(session)
const passport = require('passport')
const Emitter = require('events')


//Database connection
const url = 'mongodb://localhost:27017/juices';
mongoose.connect(url, {
    useCreateIndex:true, 
    useNewUrlParser: true, 
    useUnifiedTopology:true, 
    useFindAndModify: true
});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('Database Connected......');
}).catch(err =>{
    console.log(err);
})

// session store to database
const mongoStore = new MongoDbStore({
    mongooseConnection : connection,
    collection: "sessions"

})

// Event Emitter
const eventEmitter = new Emitter()
app.set('eventEmitter', eventEmitter)


//session config(middle ware) => to store the cart
app.use(session({
     secret: process.env.COOKIE_SECRET,
     resave: false,
     store: mongoStore,
     saveUninitialized: false,
     cookie:{maxAge: 1000 * 60 * 60 * 24} //24 housr valid
}))

 //passport import config
 const passportInit = require('./app/config/passport')
 passportInit(passport)
 app.use(passport.initialize())
 app.use(passport.session())
 
app.use(flash())

//Assest
app.use(express.static('public'))
// to read urlencoded data
app.use(express.urlencoded({ extended: false})) 
// to read json
app.use(express.json())

//Global middleware
app.use((req,res,next)=>{
    res.locals.session = req.session;
    res.locals.user = req.user
    next()
})

//set template engine
app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine', 'ejs')

// local module
require('./routes/web.js')(app)


//to listen the server
const server = app.listen(PORT, ()=>{
   console.log(`Server listen at ${PORT}`)
});

// Socket

const io = require('socket.io')(server)

io.on('connection', (socket)=>{
    // Join
    socket.on('attach', (orderId)=>{
        socket.join(orderId)
    })
})

eventEmitter.on("orderUpdated", (data)=>{
    io.to(`order_${data.id}`).emit('orderUpdated', data)
})

eventEmitter.on('orderPlaced', (data)=>{
    io.to('adminRoom').emit('orderPlaced',data)
})

