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

# Parts that can be modified for better design
1:31:00 --> ProductScreen

10. Load Products From backend
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