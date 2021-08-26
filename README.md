# Juice_Ordering_System
 
# Images of  application 

## MENU PAGE 

![Screenshot (689)](https://user-images.githubusercontent.com/74869287/130790075-0b1a47d1-0f69-4d30-8fab-cd1fbfd93ad2.png)

## CART PAGE

![Screenshot (690)](https://user-images.githubusercontent.com/74869287/130790055-80a4f933-2483-41a9-9373-378135ad43b2.png)

## REGISTRATION PAGES

![Screenshot (687)](https://user-images.githubusercontent.com/74869287/130790152-befda7e5-50a6-42ea-9250-128f78b40c6f.png)

## LOGIN PAGE

![Screenshot (688)](https://user-images.githubusercontent.com/74869287/130790105-dea4920e-77db-4b89-b472-ce4ec216631e.png)

## ADDRESS AND OTHER DETAIL

![Screenshot (686)](https://user-images.githubusercontent.com/74869287/130789519-fbbbad6d-fe0a-45b7-ba05-f248e6442798.png)

## ALL ORDER DETAILS

![Screenshot (685)](https://user-images.githubusercontent.com/74869287/130789492-cfabe5db-7d0c-4a4f-846a-04e5f9e5898f.png)

## TRACKING DETAILS OF ORDER

![Screenshot (684)](https://user-images.githubusercontent.com/74869287/130789469-cfb1e9f0-bfd4-4ae3-baea-c76ceb3f9f99.png)

## ADMIN PAGE 
![Screenshot (692)](https://user-images.githubusercontent.com/74869287/130791176-46926f65-32ac-419c-a953-3a68ee2f9712.png)

## ORDER UPDATION AT REAL TIME
![Screenshot (691)](https://user-images.githubusercontent.com/74869287/130940735-25694e17-a54c-498e-a02c-f2f94c35b2dc.png)


## MONGODB COLLECTION USED IN PROJECT

![Screenshot (671)](https://user-images.githubusercontent.com/74869287/130317439-0f21a200-3ad5-4355-8f33-817553c875dd.png)

## USER COLLECTION DETAILS IN MONOGODB

* there clearly showing that the password is stored in encrypted form using bycrpt.js (10 mould passwords),
  encrypted password can't get decrypted for comparing details during login.
  
![Screenshot (670)](https://user-images.githubusercontent.com/74869287/130317453-98aca5c7-0124-403b-81c9-9099efa3bb06.png)

## Description of project

The project has two parts

1 Admin panel
 * Only admin can access the pages whom roles decide to admin. 
 * Admin has access to update order details.
 * Admin can auth use the fixed username to get logged in.
 
2 User panel
 * Many pages created were for users like cart page, home, offers, login,    order details, tracking Id pages.
 * Token id generated for every user is unique that stores every detail of the user.
 * Pages created using the EJS template engine and CSS framework(Tailwind CSS), this application consists of Authentication using the encrypted password (bycrpt.js lib), SESSIONS, TOKENS, SOCKET.IO, Moment (for time), etc...

# Additional features of the application
 * This project also has Webpack (Laravel Mix)
 * Webpack helps make the application compatible with the browser.
 * Whenever each user login they generate a session for the user and store the details in the database.
 * Without Authentication (Registration/Login), no user can place an order.

# Following are the steps to proceed application

 1 Install all dependencies with yarn as the package manager.
 
 2 Correctly install Webpack (https://laravel-mix.com/docs/4.0/installation) because sometimes because versions it producing issues.
 
 3 Connect your Database to your project where and make secrete key in the .env file.
 
 4 After install an application type (nodemon server.js) in the terminal to run the server.
 
 5 And also run (yarn watch) in a new terminal to run webpack.
 
## 🚀 Features of Application

[Menu](https://github.com/codeforgrow/Juice_Ordering_System)
