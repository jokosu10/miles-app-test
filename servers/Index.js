const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const headerParser = require("header-parser");

const helmet = require("helmet");
const cors = require("cors");
const passport = require("passport");
const morgan = require('morgan');
const mongoose = require('mongoose')

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const url = process.env.DB_URI_DEV
//require all the routes
var IndexRouter = require("../routes/IndexRoute");
var PackageRouter = require("../routes/PackageRoute")

var server = express();

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB ...", url)
    })
    .catch((err) => {
        console.log(err)
    });


// configure app to use bodyParser
server.use(bodyParser.json());
server.use(express.json());
server.use(express.urlencoded({
    extended: true
}));
server.use(morgan('tiny'));
server.use(cookieParser());
server.use(helmet());
server.use(cors());
server.use(headerParser);
server.use(passport.initialize());

/**
 * enable CORS
 */
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

//prefix all the routes
server.use(IndexRouter);
server.use(PackageRouter);

// catch 404 and forward to error handler
server.use(function (req, res, next) {
    next(createError(404));
});

// error handler
server.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // send the error page
    res.status(err.status || 500);
    res.json({ message: res.locals.message })
});

module.exports = server;