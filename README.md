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

## Screenshots

1. Creating customer in database
![:create](https://user-images.githubusercontent.com/99065594/189067866-5e17803a-463c-4ff8-a76f-feca8e55a3f1.png)

2. Fetching customer lists from database
![:list](https://user-images.githubusercontent.com/99065594/189068408-62ecc012-ee87-4a08-975f-9749e23534aa.png)

3. Fetching orders list for specific customers from database
![:orderList](https://user-images.githubusercontent.com/99065594/189068616-8d66dd08-a020-4a61-8c43-a655c00fe666.png)

4. Creating product in database
![:createProduct](https://user-images.githubusercontent.com/99065594/189068793-92ffea6b-5afe-4202-9c46-0e2b9c69bff5.png)

5. Updating price of specific product in database
![:updatePrice](https://user-images.githubusercontent.com/99065594/189068992-ac62366a-84e1-4c62-89d5-232cef967fb6.png)

6. Fetching maximum orders in an year from database
![:max](https://user-images.githubusercontent.com/99065594/189069218-6f459ff7-46d2-4495-8718-e423b35bd188.png)


7. Creating new Order in database
8. ![:newOrder](https://user-images.githubusercontent.com/99065594/189069304-2733c069-2eca-4877-98c5-cd6614d82f18.png)


