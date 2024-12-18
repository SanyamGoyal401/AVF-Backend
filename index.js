const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const {PORT} = require('./config/server');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(cookieParser());

const patientRoutes = require('./routes/patient');
const surgeonRoutes = require('./routes/surgeon');

app.use(cors({
    credentials: false,  // This enables credentials in the CORS request
    origin: '*',
}));

app.get('/', (req, res)=>{
    console.log("Server is up");
    res.json({'msg': 'Server is up'});
})

app.use('/patient', patientRoutes);
app.use('/surgeon', surgeonRoutes);

app.listen(PORT, async()=>{
    await connectDB();
    console.log(`Server is running at ${PORT}`);
})