const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv');
const connectDb = require('./config/db');

//dot env config
dotenv.config();

//DB connection
connectDb();

//rest object
const app =  express()

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//route
app.use("/api/v1/test", require('./routes/testRoutes'))
app.use('/api/v1/auth', require('./routes/authRoutes'))
//rout 
app.get('/', (req,res) => {
    return res.status(200).send("<h1>Welcome to  Food Server</h1>")
});

 
const PORT = process.env.PORT;  

//listen
app.listen(PORT, () =>{
    console.log(`Node Server Running On ${PORT}`);
});