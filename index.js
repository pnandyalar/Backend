require('dotenv').config()
const signUpRoute = require('./routes/signUpRoute')
const loginRoutes = require('./routes/LoginRoutes')
const masterRoutes = require('./routes/masterRoutes')
const routerCounter = require('./routes/EmpCounterRoutes')
const forgotrouter = require('./routes/ForgotRoutes')
const product = require('./routes/productRoutes')

const MONGO_URL = process.env.MONGO_URL
const PORT =process.env.PORT || 8081
const express = require('express')
const  session = require('express-session')
const mongoose = require('mongoose')
const store = require('connect-mongo');
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));
//================SESSION======================

  // app.use(
  //   session({
  //     secret: 'your-secret-key',
  //     resave: false,
  //     saveUninitialized: true,
  //     store:  
  //     store.create({ mongoUrl: MONGO_URL }),  // for connect-mongodb-sessio package
  //       // MongoStore.create({ mongoUrl: MONGO_URL }), for connect-mongo package
       
  //     cookie: {
  //       maxAge: 150000, // 2.5 minutes (in milliseconds)
  //     },
  //   })
  // );
  //================SESSION======================

app.use(signUpRoute)

app.use(loginRoutes)
app.use(masterRoutes)
app.use(routerCounter)
app.use(forgotrouter)
app.use(product)


//creating Routes
app.get ('/',(req, res) =>{
     
res.send(`HELLO ${PORT} running in your machine `)

}) 

mongoose.connect(MONGO_URL,{useNewUrlParser: true,  useUnifiedTopology: true,})
  
.then(()=>{
    console.log('connected to mongodb')
    app.listen(PORT,()=>{
      console.log(`HELLO  at ${PORT} app-server running in your machine `)})
    }
    )
    
.catch((err)=>{
console.log(err);
})



