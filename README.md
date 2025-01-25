# Student-Management-System

A secure **Student Management API** built with Node.js, Express & MongoDB. Features JWT authentication, admin roles, and RESTful endpoints. 

[![Node.js](https://img.shields.io/badge/Node.js-16%2B-green)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-5%2B-brightgreen)](https://www.mongodb.com)

-----

## 🚀 Features  
- RESTful API for managing students.  
- User authentication and authorization with **JWT**.  
- Admin functionalities for advanced management.  
- Security enhancements using **helmet.js**.  
- Centralized error handling for easier debugging.  

-----


## ⚙️ Installation  
1. Clone & install:  
   ```bash  
   git clone https://github.com/MahmoudEmadAbdullah/Student-Management-System.git  
   cd Student-Management-System  
   npm install

  2. Configure environment:
      ```bash 
      # .env file  
      PORT=4000  
      MONGO_URL=mongodb://127.0.0.1:27017/students  
      JWT_SECRET=your_ultra_secure_secret_here

   3. Start Server
      ```bash 
         npm start  
         # Server will run on http://localhost:4000  


-----

## Database Configuration
By default, the application connects to a local MongoDB database at mongodb://127.0.0.1:27017/students. To use MongoDB Atlas or another cloud database, update the MONGO_URL in your .env file.

-----

## 🛠️ Technologies Used
- Backend: Node.js, Express.
- Database: MongoDB, Mongoose.
- Security: JWT, Helmet.js.
- Tools: Postman, MongoDB Compass.

-----

## 👨💻 Author  
**Mahmoud Emad Abdallah**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://www.linkedin.com/in/mahmoud-emad-8979311b4)  
[![GitHub](https://img.shields.io/badge/GitHub-Profile-black)](https://github.com/MahmoudEmadAbdullah)  



