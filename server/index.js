require('dotenv').config();

const express = require('express');

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true }));


const origin = process.env.FRONTEND_BASE_URL;
const backend_port = process.env.BACKEND_PORT || 3000;
console.log(origin, backend_port);

app.use(cors({
    origin: origin, // Allow requests from your frontend
    methods: ['GET', 'POST'], // Allow only GET and POST requests (or other methods if needed)
    allowedHeaders: ['Content-Type'] // Allow Content-Type header
  }));

const crudRouter = require('./routes/studentsRoutes');

app.use('/api', crudRouter)

app.get('/', (req, res) =>{
    res.send("hi from backend...")
})


app.listen(backend_port, () => {
    console.log(`server is running on port ${backend_port}`);
    
})