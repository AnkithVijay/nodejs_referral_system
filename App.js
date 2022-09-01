const express = require("express");
const app = express();
var cookieParser = require('cookie-parser');
var moment = require('moment');
var shortDateFormat = "DD-MM-YYYY";
app.locals.moment = moment; // this makes moment available as a variable in every EJS page
app.locals.shortDateFormat = shortDateFormat;
app.use(cookieParser());

app.use('/', require('./api/index'));

module.exports = app;