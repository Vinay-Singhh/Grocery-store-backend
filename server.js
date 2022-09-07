const express = require('express');
const app = express();
const port = 3011;
const User = require('./models/users')
//require mongoose
const db = require('./config/mongoose');

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use express router
app.use('/', require('./routes'));

// app.post('/createCustomer', function (req, res) {
//     User.create({
//         email: req.body.email,
//         phone: req.body.phone,
//         name: req.body.name,
//     }, function (err, newUser) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         // console.log('*******', newUser);
//         return res.redirect('back');
//     });
// });

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