const express = require('express');
const app = express();
const cookie = require('cookie-parser')
const cors = require('cors')

const products = require('./routes/product');
const auth = require('./routes/auth')
const order = require('./routes/order')

app.use(cors({
    origin: "http://localhost:3001",
    credentials: true}))
app.use(express.json({limit:'50mb'}));

app.use(express.urlencoded({limit: "50mb", extended: true }));
app.use(cookie());
app.use('/api/v1', products);
app.use('/api/v1', auth);
app.use('/api/v1', order);

module.exports = app