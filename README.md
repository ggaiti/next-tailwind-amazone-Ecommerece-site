# Nextjs Tailwind Ecommerce Website Like Amazon

Create an Ecommerce Amazon like Website

## Steps

1. Install Tools
2. Create Next App
3. Publish to Github
4. Create Website Layout
   1. create layout component
   2. add header
   3. add main section
   4. add footer
   5. add tailwind classes
5. List Products
   1. add data.js
   2. add images
   3. render products
6. Create Product Details
   1. create product page
   2. create 3 columns
   3. show image in first column
   4. show product info in second column
   5. show add to cart action on third column
   6. add styles
7. Handle Add To Cart
   1. define react context
   2. define cart items state
   3. create add to cart action
   4. add reducer
   5. create store provider
   6. handle add to cart button
8. Create Cart Page
   1. create cart.js
   2. use context to get cart items
   3. list items in cart items.
   4. redirect to cart screen after add to cart
9. Handle Changing Cart Items
   1. add select box for quantity
   2. handle select box change
10. Save Cart Items
    1. install js-cookie package
    2. save and retrieve cart items in cookies
11. Create Login Form
    1. install react hook form
    2. create input boxes
    3. add login button
12. Connect to MongoDB
    1. install mongoose
    2. install mongodb or use mongodb atlas
    3. save connection url in .env file
    4. create db utils file
    5. create sample users
13. Create Login API
    1. install next-auth
    2. create nextauth.js
    3. implement sign-in
    4. use sign-in in login form
14. Add User Menu
    1. check user authentication
    2. install headlessui
    3. show user menu
15. Create Shipping Screen
    1. display address fields
    2. save address in context
16. Create Payment Method Screen
    1. display payment methods
    2. save payment method in context
17. Seed sample products
    1. insert sample products to mongodb
    2. load products from db in home and product screen
    3. check product count in stock in add to cart
18. Load Products MongoDB
    1. load porducts in home page from mongodb
    2. load products in product page from mongodb
    3. use product api to check count in stock in add to cart
19. Create Place Order Screen
    1. display shipping address
    2. display payment method
    3. display order items
    4. implement create order
20. Create Order Screen
    1. implement backend api for order details
    2. load order data from backend
    3. display order details
21. Create Register Screen
    1. add sign up api
    2. create register page
    3. call api on form submit
22. Pay Order by Paypal
    1. add paypal button
    2. handle payment
    3. create backend api
    4. update order state
23. Create Order History Screen
    1. create my order api
    2. create order history component
    3. fetch orders and display them
24. Publish on Vercel
    1. create vercel account
    2. connect to github
    3. set next auth and mongodb db in env vars
    4. push code to github
25. Update User Profile
    1. create profile screen
    2. show user info
    3. handle update user info
