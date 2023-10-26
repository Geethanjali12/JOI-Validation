const express = require('express');
const mongoose = require('mongoose');
const router = require('./routers/UserRouter');

const app = express();

async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017/crud', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

connectDB();

app.use(express.json());
app.use('/', router);

app.listen(3000, () => {
    console.log('App is Running');
});