# Juice_Ordering_System

## 🎯 Description of project

The project has two parts

### Admin panel 👨‍💼
 * This section is mainly for admin. Admin can login with a fixed id provided to admin for authentication. 
 * There are some pages which only the admin can route.
 * Admin can change the order details through which users get updated regarding the order.
 * Once the order gets completed, order details got removed from the admin page.
 
### Customer panel 🧑‍🤝‍🧑
 * Many pages created were for users like cart page, home, offers, login, order details, tracking Id pages.
 * Token id generated for every user is unique that stores every detail of the user.
 * Whenever the user logs in, a unique session is generated for the user that stores all the essential details. 
 * Passwords of the user are stored in encrypted form (hashed passwords) using BrcyptJS (10 molds). 
 * All the past order details of the user are present with a unique token id on the orders page.
 * A user gets a tracking record for his order created using Socket.io.

# 🏹 Images of Application 

### MENU PAGE 

![Screenshot (689)](https://user-images.githubusercontent.com/74869287/130790075-0b1a47d1-0f69-4d30-8fab-cd1fbfd93ad2.png)

### CART PAGE

![Screenshot (690)](https://user-images.githubusercontent.com/74869287/130790055-80a4f933-2483-41a9-9373-378135ad43b2.png)

### REGISTRATION PAGES

![Screenshot (687)](https://user-images.githubusercontent.com/74869287/130790152-befda7e5-50a6-42ea-9250-128f78b40c6f.png)

### LOGIN PAGE

![Screenshot (688)](https://user-images.githubusercontent.com/74869287/130790105-dea4920e-77db-4b89-b472-ce4ec216631e.png)

### ADDRESS AND OTHER DETAIL

![Screenshot (686)](https://user-images.githubusercontent.com/74869287/130789519-fbbbad6d-fe0a-45b7-ba05-f248e6442798.png)

### ALL ORDER DETAILS

![Screenshot (685)](https://user-images.githubusercontent.com/74869287/130789492-cfabe5db-7d0c-4a4f-846a-04e5f9e5898f.png)

### TRACKING DETAILS OF ORDER

![Screenshot (684)](https://user-images.githubusercontent.com/74869287/130789469-cfb1e9f0-bfd4-4ae3-baea-c76ceb3f9f99.png)

### ADMIN PAGE 
![Screenshot (692)](https://user-images.githubusercontent.com/74869287/130791176-46926f65-32ac-419c-a953-3a68ee2f9712.png)

### ORDER UPDATION AT REAL TIME
![Screenshot (691)](https://user-images.githubusercontent.com/74869287/130940735-25694e17-a54c-498e-a02c-f2f94c35b2dc.png)


### MONGODB COLLECTION USED IN PROJECT

![Screenshot (671)](https://user-images.githubusercontent.com/74869287/130317439-0f21a200-3ad5-4355-8f33-817553c875dd.png)

### USER COLLECTION DETAILS IN MONOGODB

* there clearly showing that the password is stored in encrypted form using bycrpt.js (10 mould passwords),
  encrypted password can't get decrypted for comparing details during login.
  
![Screenshot (670)](https://user-images.githubusercontent.com/74869287/130317453-98aca5c7-0124-403b-81c9-9099efa3bb06.png)
 
## 🚀 Features of Application

* [Menu Page](https://github.com/codeforgrow/Juice_Ordering_System#-license)
* [Cart Page](https://github.com/codeforgrow/Juice_Ordering_System#cart-page)
* [Register Auth](https://github.com/codeforgrow/Juice_Ordering_System#registration-pages)
* [Login Auth](https://github.com/codeforgrow/Juice_Ordering_System#login-page)
* [Detailing Page](https://github.com/codeforgrow/Juice_Ordering_System#address-and-other-detail)
* [Past Order Details](https://github.com/codeforgrow/Juice_Ordering_System#all-order-details)
* [Tracking Order Page](https://github.com/codeforgrow/Juice_Ordering_System#tracking-details-of-order)
* [Admin Section](https://github.com/codeforgrow/Juice_Ordering_System#admin-page)
* [Real Time Updations](https://github.com/codeforgrow/Juice_Ordering_System#order-updation-at-real-time)
* [Database Connection](https://github.com/codeforgrow/Juice_Ordering_System#mongodb-collection-used-in-project)
* [Feature Request](https://github.com/codeforgrow/Juice_Ordering_System#-feature-request)
* [Licensed](https://github.com/codeforgrow/Juice_Ordering_System#-license)

## Additional Features of Application
  
 * 📦 [Larvel-Mix](https://laravel-mix.com/docs/4.0/installation)  

##  Dependancies Requires For Project

## ⚙️ Basic Dependancies 

```
    yarn add express
    yarn add ejs 
    yarn add express-ejs-layout
    yarn add express-flash
    yarn add express-session
```

### 💻 Dev Dependancies

```
  yarn add nodemon
  yarn add larvel-mix
  yarn add postcss
  yarn add resolve-url-loader
  yarn add sass
  yarn add sass-loader
```

### 💿 Database Dependancies

```
   yarn add mongoose
   yarn add dotenv
   yarn add connect-mongo
```
### 🔒 Authentication Dependancies

``` 
     yarn add passport
     yarn add passport-local
     yarn add bycrpt
```

### ➪ Ajax Call Dependancies
```
    yarn add axios
```

### 🕑 Real Time Function Dependancies
```
    yarn add Socket.io
    yarn add Noty
    yarn add moment
```
## 🔧 Steps To Use

 * Install all Dependancies.
 
 * Setup [Larvel Mix](https://laravel-mix.com/docs/4.0/installation) properly.
 
 * Connect you Databse to project.
 
   * Create a file name it .env like ➡️ [example.env](https://github.com/codeforgrow/Juice_Ordering_System/blob/main/example.env) 
 
 * Run nodemon server.js in one terminal (for express server).
 
 * Run yarn watch in another terminal (for larvel mix).

## ⭐ Feature Request
 
 * Feel free to Open an issue on GitHub to request any additional features you might need for your use case.
 
 * Connect with me on [LinkedIn](https://www.linkedin.com/in/abhay-sharma-71a181191/). I'd love ❤️️ to hear where you are using this library.

## 📜 License
 
 * This software is open source, licensed under the [MIT License](https://github.com/PawanKolhe/color-calendar/blob/master/LICENSE).
