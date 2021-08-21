# Juice_Ordering_System
 
# Description of project

The project has two parts

1 Admin panel
 * Only admin can access the pages whom roles decide to admin. 
 * Admin has access to update order details.
 * Admin can auth use the fixed username to get logged in.
 
2 User pannel
 * Many pages created were for users like cart page, home, offers, login,    order details, tracking Id pages.
 * Token id generated for every user is unique that stores every detail of the user.
 * Pages created using the EJS template engine and CSS framework(Tailwind CSS), this application consists of Authentication using the 
   encrypted password (bycrpt.js lib), SESSIONS, TOKENS, SOCKET.IO, Moment (for time), etc...

# Additional features of application
 * This project also has Webpack (larval. mix)
 * Webpack helps make the application compatible with the browser.
 * Whenever each user login they generate a session for the user and store the details in the database.
 * Without Authentication (Registration/Login), no user can place an order.

# To use it following steps can be proceed

 1 Install all dependencies with yarn as the package manager.
 
 2 Correctly install Webpack (https://laravel-mix.com/docs/4.0/installation) because sometimes because versions it producing issues.
 
 3 After install an application type (nodemon server.js) in the terminal to run the server.
 
 4  Connect your Database to your project where and make secrete key in the .env file. 
 
 5 And also run (yarn watch) in a new terminal to run webpack.

# Images of  application 

# MENU PAGE 

![Screenshot (665)](https://user-images.githubusercontent.com/74869287/130316693-bd7ead15-9e4d-4a3c-8bcc-570249abf254.png)

# CART PAGE

![Screenshot (667)](https://user-images.githubusercontent.com/74869287/130316765-696da842-ac1e-43e3-859a-536c801da095.png)

# LOGIN / REGISTRATION PAGES

![Screenshot (664)](https://user-images.githubusercontent.com/74869287/130316772-ef3cd624-7ecc-4795-be8e-a72d4fcd373a.png)

![Screenshot (663)](https://user-images.githubusercontent.com/74869287/130316732-840a13b6-1f02-4653-a429-b37cb338dc6d.png)

# MONGODB COLLECTION USED IN PROJECT

![Screenshot (671)](https://user-images.githubusercontent.com/74869287/130317439-0f21a200-3ad5-4355-8f33-817553c875dd.png)

# USER COLLECTION DETAILS IN MONOGODB

* there clearly showing that the password is stored in encrypted form using bycrpt.js (10 mould passwords),
  encrypted password can't get decrypted for comparing details during login.
  
![Screenshot (670)](https://user-images.githubusercontent.com/74869287/130317453-98aca5c7-0124-403b-81c9-9099efa3bb06.png)
