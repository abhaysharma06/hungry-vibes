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

### LANDING PAGE

![Screenshot (917)](https://user-images.githubusercontent.com/74869287/187036704-3e5051ef-1c7b-44de-8e87-3c38e6f05feb.png)

![Screenshot (913)](https://user-images.githubusercontent.com/74869287/187036643-a2ff6616-9b8f-4676-aeed-41eac25b7ac2.png)

### MENU PAGE 

![Screenshot (914)](https://user-images.githubusercontent.com/74869287/187036727-515485e8-0483-47ab-a4ae-13b6c52358a1.png)

### CART PAGE

![Screenshot (922)](https://user-images.githubusercontent.com/74869287/187036790-a19c19d8-77e0-4280-a2d9-ffbfeacf434c.png)

### REGISTRATION PAGES

![Screenshot (915)](https://user-images.githubusercontent.com/74869287/187036831-14363b74-cdf4-4aa6-a8d6-958f25703b62.png)

### LOGIN PAGE

![Screenshot (916)](https://user-images.githubusercontent.com/74869287/187036832-a292a554-53e8-4ec4-aac4-012e4e7d191a.png)

### ALL ORDER DETAILS

![Screenshot (923)](https://user-images.githubusercontent.com/74869287/187037064-be794897-2fc8-4d4d-8bf2-3492e165f7a6.png)

### TRACKING DETAILS OF ORDER

![Screenshot (920)](https://user-images.githubusercontent.com/74869287/187037161-18c09d5b-dfc9-4889-b32a-d52ab81d22e5.png)

### ADMIN PAGE

![Screenshot (921)](https://user-images.githubusercontent.com/74869287/187037213-d2bce2d4-66f7-43fe-8203-fe8b725086cc.png)

### MONGODB COLLECTION USED IN PROJECT

![Screenshot (671)](https://user-images.githubusercontent.com/74869287/130317439-0f21a200-3ad5-4355-8f33-817553c875dd.png)

### USER COLLECTION DETAILS IN MONOGODB

* there clearly showing that the password is stored in encrypted form using bycrpt.js (10 mould passwords),
  encrypted password can't get decrypted for comparing details during login.
  
![Screenshot (670)](https://user-images.githubusercontent.com/74869287/130317453-98aca5c7-0124-403b-81c9-9099efa3bb06.png)
 
## 🚀 Features of Application

* [Menu Page](https://github.com/codeforgrow/Juice_Ordering_System#menu-page)
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

## 📦 Additional Features of Application
  
 * [Larvel-Mix](https://laravel-mix.com/docs/4.0/installation)  

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
