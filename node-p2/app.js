require('dotenv').config();
const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('./logger');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    secret: 'W$q4=25*8%v-}UV',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));

require('./routes')(app, passport);

app.use(function (err, req, res, next) {
    if (!err.statusCode) err.statusCode = 500;
    logger.log('error', req.originalUrl, err);
    res.status(err.statusCode).send(err.message);
});

app.listen(process.env.SERVERPORT, function () {
    console.log(`server started on port ${process.env.SERVERPORT}`);
});
