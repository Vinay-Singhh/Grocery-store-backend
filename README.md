# Grocery Store Backend

An API for Grocery Store. This is complete node application with routes, controllers and models.

## Setup

Run `npm start` to install required dependencies

Create .env with following variables

- PORT = [Your Port]
- MongoURL = [Your MongoDB Url]
- Run `npm start`

## API urls
* Api to create Customers list: [POST] `localhost:3011/customer/create` with [email, phone, name] in postman to create new customer
* Api to fetch Customers list: [GET] `localhost:3011/customer/list`
* Api to fetch specific customer Orders List: [GET] `localhost:8000/customer/orderList/:emailID` with registered email in place of :emailID in postman to get the details of customer
* Api to fetch customer Details with maximum Orders in an year: GET `localhost:3011/customer/max`
* Api to create new Product: [POST] `localhost:3011/product/createProduct`
* API to update Product Price: [POST] `localhost:3011/product/:id/updatePrice` with productID in place of :id and pass p_price to any value > 0
* Api to create a new order: [POST] `localhost:3011/order/newOrder` with [phone or email, item1, item2... , paymentInfo'] in postman to create new order for customer
