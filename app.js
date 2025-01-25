const config = require('config');
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const dbConnection = require('./config/dbConnection');
const errorHandler = require('./middlewares/errorMW');
const app = express();


//Import Routers
const studentsRouter = require('./routes/Students')
const userRouter = require('./routes/User');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');


// Environment Variables
const port = config.get('port');


//middleware to parse data sent in the body of request
app.use(express.urlencoded({ extended: true }));

//middleware to parse data sent in json format
app.use(express.json());

//middleware used to serve static files from a specified directory.
app.use(express.static(path.join(__dirname, 'public')));


// used to enhance the security of your web application by setting various HTTP headers 
app.use(helmet());


// Using Router of students
app.use("/api/students", studentsRouter);

// Using Router of User
app.use("/api/user", userRouter);

// Using Router of login
app.use("/api/login", authRouter);

// Using Router of admin
app.use('/api/admin', adminRouter);


//Home Page Form
app.get('/', (req, res, next) => {
    const mainFilePath = path.join(__dirname, 'public', 'main.html');
    res.sendFile(mainFilePath, (err) => {
        if(err) next(err);
    });
});


// Central error handler (MUST BE LAST)
app.use(errorHandler);


// Start server
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
    dbConnection();
});