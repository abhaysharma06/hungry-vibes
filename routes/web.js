// to get module from homeController, authController, cartController
const homeController = require("../app/http/controllers/homeController");
const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customers/cartController")
const ordercontroller = require("../app/http/controllers/customers/ordercontroller")
const AdminOrderController = require('../app/http/controllers/admin/orderController')
const statusController = require('../app/http/controllers/admin/statusController')

// Middlewares
const admin = require('../app/http/middlewares/admin')
const guest = require("../app/http/middlewares/guest")
const auth = require('../app/http/middlewares/auth')

function initRoutes(app){
// to route to home page
app.get("/", homeController().index)
// to route to login page
app.get("/login", guest, authController().login)
// for post login
app.post("/login", authController().postlogin)
 // to route to register page
app.get("/register",guest, authController().register)
// for post registration
app.post("/register", authController().postRegister)
// for logout page
app.post("/logout", authController().logout)
 // to route to cart page
app.get("/cart", cartController().index)
app.post("/update-cart", cartController().update)

// customer routes
app.post('/orders', auth,ordercontroller().store)
app.get('/customers/orders',auth,ordercontroller().index)
app.get('/customers/orders/:id',auth,ordercontroller().show)

// Admin routes
app.get('/admin/orders', admin, AdminOrderController().index)
app.post('/admin/order/status', admin, statusController().update)

//
}

module.exports = initRoutes