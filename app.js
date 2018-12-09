var express = require('express');
const PORT = process.env.PORT || 5000;

var one = require('./routes/one');
var two = require('./routes/two');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', two);
app.use('/one', one);
app.use('/two', two);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

module.exports = app;
