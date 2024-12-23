const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend
    methods: ['GET', 'POST'], // Allow only GET and POST requests (or other methods if needed)
    allowedHeaders: ['Content-Type'] // Allow Content-Type header
  }));


const crudRouter = require('./routes/crudRoutes');

app.use('/api', crudRouter)

app.get('/', (req, res) =>{
    res.send("hi from backend...")
})


app.listen(3000, () => {
    console.log("server is running on port 3000");
    
})