const express = require('express');
const app = express();
const port = 3011;

//require mongoose
const db = require('./config/mongoose');

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use express router
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) {
        console.log('Error in running the server: ', err);
        return;
    }
    console.log('Server is running on port: ', port);
});

// /customerList
// /customerOrdersList
// /customerMaxOrdersInYear
// /createCustomer
// /createProduct
// /updateProductPrice