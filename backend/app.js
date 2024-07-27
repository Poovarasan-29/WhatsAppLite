const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const chat = require('./routes/chat');
const cors = require('cors');
const connectDatabase = require('./config/connectDatabase');

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') })
app.use(express.json())
app.use(cors())
const port = process.env.PORT
connectDatabase()


app.use('/api/v1/', chat)


app.listen(port, () => {
    console.log("Server Running...", port);
})