
const mongoose = require('mongoose');
const express = require('express')
const product = require('./routes/product.route');
const app = express()
const port = 3000
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/ProductDB', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/products', product);


app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});