var express = require('express');
const PORT = process.env.PORT || 5000;

var one = require('./routes/one');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', one);
app.use('/one', one);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

module.exports = app;
