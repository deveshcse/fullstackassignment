require('dotenv').config();

const express = require('express');

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true }));


const backend_port = process.env.BACKEND_PORT || 3000;
app.use(cors({
    origin: '*', // Allow requests from any origin
    methods: '*', // Allow all HTTP methods
    allowedHeaders: '*' // Allow all headers
}));

const crudRouter = require('./routes/studentsRoutes');

app.use('/api', crudRouter)

app.get('/', (req, res) =>{
    res.send("hi from backend...")
})


app.listen(backend_port, () => {
    console.log(`server is running on port ${backend_port}`);
    
})