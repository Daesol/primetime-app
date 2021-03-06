# primetime-app
# Required Programs
1. Node.js
2. Mongodb Community & Compass (mongodb.com/try/download/community)
3. postman.com

# Starting React Webview
1. Make sure you are on /prime-app folder (NOT primetime-app-main)
2. navigate to "frontend" folder "cd frontend"
3. install react router. Type "npm install react-router-dom"
4. - (Optional) Downloaded react-responsive-picture for mobile responsive image
5. start react. Type "npm start"

# Loading backend and react veiw
1. first open up new terminal on primetime-app
2. npm install 
3. npm start (this is for backend)
4. open up new terminal and cd to frontend
    # React-Redux && Thunk
    1. cd frontend
    2. npm install redux react-redux
    3. npm install react-redux
    3. install redux devtool from chrome app

    # Chnage proxy
    1. open /frontend/src/package.json
    2. cd frontend
    3. npm start
    4. Once you run, your terminal will show "On Your Network: http://xxx.xxx.x.xxx:3000"
        1. 192.168.2.42 House
        2. 192.168.2.27 Wandee
    5. Copy the ip (not the 3000)
    6. Paste it to "proxy" in package.json 

    # Start Mongodb on terminal
    1. open Mac Terminal
    2. brew services list
        1. will show that mongodb stopped
    3. brew services start mongodb-community
    4. mongo <-- start mongo
5. npm install
6. npm start (React webview)

7. npm install mongoose
8. Also download https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
9. Start mongodb
9. npm install bcryptjs
10. npm install express-async-handler

11. npm install jsonwebtoken
12. npm install dotenv <-- in the main folder

# Using PayPal
1. Updating Live Client ID
    1. Submit PayPal application to upgrade to live Client ID
    2. Once approved, update .env PAYPAL_CLIENT_ID to live client id 
2. installing react paypal
    1. cd frontend
    2. npm install react-paypal-button-v2


# Parts that can be modified for better design
1:31:00 --> ProductScreen

10. Load Products From backend (9, 10 must review backend server request)
    1. edit HomeScreen.js
    2. define productsm loading and error.
    3. create useEffect
    4. define async fetchData and call it
    5. install axios
    6. get data from /api/products
    7. show them in the list
    8. create Loading Component
    9. create Message Box Componenet
    10. use them in HomeScreen

11. Linting 
Skipped linting

12. Add Redux to Home Screen
    1. npm install redux react-redux
    2. create store.js
    3. initState = {products: []}
    4. reducer = (state, action) => switch LOAD_PRODUCTS: {products: action.payload}
    5. export default createStore(reducer, initState)
    6. Edidt HomeScreen.js
    7. shopName = useSelector(state=>state.products)
    8. const dispatch = useDispatch()
    9. useEffect(()=>dispatch({type: LOAD_PRODUCTS, payload: data}))
    10. Add store to index.js

13. Add Redux to Product Screen
    1. Create product details constants, actions and reducers
    2. Add reducer to store.js
    3. use action in ProductScreen.js
    4. add /api/produc/:id to backend api

    --> for Network XRH, PRODUCT_DETAILS_SUCCESS & PRODUCT_DETAILS_FAIL are not changing it to false.

14. Handle Add to Cart Button
    1. Handle Add to Cart in ProductScreen.js
    2. create CartScreen.js

15. Implement Add to Cart Action
    1. Create addToCard constants, actions and reducers
    2. add reducer to store.js
    3. use action in CartScreen.js
    4. render cartItems.length

16. Build Cart Screen
    1. Create 2 columns ffor cart items and cart action
    2. cartItems.length === 0 ? cart is empty
    3. show item image, name, qty and price
    4. proceed to checkout button
    5. implement remove from cart action

17. Implement Remove From Cart Action
    1. Create removeFromCart Constants, actions and reducers
    2. Add reducer to store.js
    3. use action in CartScreen.js

18. Connect to MongoDB
    1. npm install mongoose
    2. connect to mongodb - installed mongodb https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
    3. create config.js
    4. npm install dotenv
    5. export MONGODB_URL
    6. create models/userModel.js
    7. create userSchema and userModel
    8. create models/productModel.js
    9. create productSchema and productModel
    10. create userRoute
    11. Seed sample data

19. Craete sample products in MongoDB
    1. create models/productModels.js
    2. create productSchema and productModel
    3. create producRoute
    4. Seed sample data

20. Create Sign-in backend
    1. create /signin api
    2. check email and password
    3. generate token
    4. install json web token
    5. install dotenv
    6. return token and data
    7. test it using postman

21. Design Signin Screen
    1. create SigninScreen
    2. redner email and password fields
    3. create signin constants, actions and reducers
    4. update Header based on user login

22. Implement Signin Action
    1. create signin constants, actions, reducers
    2. add reducer to store.js
    3. use action in SigninScreen.js

23. Create Registar Screen and Backend API
    1. Create API for /api/users/register
    2. insert new user to database
    3. return user info and token
    4. create RegisterScreen
    5. Add fields
    6. Style fields
    7. Add screen to App.js

24. Create Shipping Screen
    1. create CheckoutSteps.js component
    2. create shipping fields
    3. implement shipping constant, actions and reducers

25. Create Payment Screen
    1. create payment fields
    2. implement shipping constant, actions and reducers

26. Design Place Order Screen
    1. design order summary fields
    2. design order action

27. Create Place Order API
    1. createOrder api
    2. create orderModel
    3. create orderRouter
    4. create post order route

28. Implement PlaceOrder Action
    1. Handle place order button click
    2. create place order constants, action and reducer

29. Create Order Screen
    1. build order api for /api/orders/:id
    2. create OrderScreen.js
    3. dispatch order details action in useEffect
    4. load data with useSelector
    5. show data like place order screen
    6. create order details constant, action and reducer

30. Add PayPal Button
    1. get client id from paypal
    2. set it in .env file
    3. create route from /api/paypal/clientId
    4. create getPaypalClientId in api.js
    5. add paypal checkout script in orderScreen.js
    6. show paypal button

32. Display Orders History
    1. create customer orders api
    2. create api for getMyOrders
    3. show orders in profile screen
    4. style orders
    