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
    5. Copy the ip (not the 3000)
    6. Paste it to "proxy" in package.json 
5. npm install
6. npm start (React webview)


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