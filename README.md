# Juice_Ordering_System
 
# Description of project

Project have to sections 
1 Admin pannel
  * Some page are their in application which can only access by admin while logged in to the given adminID access.
  * Admin have access to update order details.
2 User pannel
  * Many pages are cretaed for user like cart page, home, offer, login, order details, tracking Id pages.
  * Unique token id generated for every single order of user store in user orders pages.
 
Pages are created with help of EJS template engine and CSS framework(Tailwind Css), This website consist of Authentication using encrypted password (bycrpt.js lib),
SESSIONS, TOKENS, SOCKET.IO, Momment (for time), and etc.. 
* This project also have Webpack (larvel.mix) which make this project compatable to the with different browser with any verion.
* whenever each user login thier generate a session for the user and store the details in database.
* Without Authentication (Registration/Login) no single order can be placed.

# To use it following steps can be processed

1 Install all dependancies with yarn as package manager (if you are comfortable to install dependancies it with npm manager then also their is no issue.)  
2 Carefully install Webpack (https://laravel-mix.com/docs/4.0/installation) because sometime due to verions it producing issues.
3 After installation type (nodemon server.js) in terminal to run the server.
4 Also connect your Database to the your project where and make secrete key in .env file. 
4 And also run (yarn watch) in new terminal to  run webpack.

# images of product

# MENU PAGE IMAGE

![Screenshot (665)](https://user-images.githubusercontent.com/74869287/130316693-bd7ead15-9e4d-4a3c-8bcc-570249abf254.png)

# CART PAGE

![Screenshot (667)](https://user-images.githubusercontent.com/74869287/130316765-696da842-ac1e-43e3-859a-536c801da095.png)

# LOGIN / REGISTRATION PAGES

![Screenshot (664)](https://user-images.githubusercontent.com/74869287/130316772-ef3cd624-7ecc-4795-be8e-a72d4fcd373a.png)

![Screenshot (663)](https://user-images.githubusercontent.com/74869287/130316732-840a13b6-1f02-4653-a429-b37cb338dc6d.png)

# MONGODB COLLECTION USED IN PROJECT

![Screenshot (671)](https://user-images.githubusercontent.com/74869287/130317439-0f21a200-3ad5-4355-8f33-817553c875dd.png)

# USER COLLECTION DETAILS 

* there clearly showing that the password are stored in encrpyted form using bycrpt.js (10 mould password),
  encrypted password cann't get dcrypted for comparing details while login.
  
![Screenshot (670)](https://user-images.githubusercontent.com/74869287/130317453-98aca5c7-0124-403b-81c9-9099efa3bb06.png)
