const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb://localhost/crudDb'

const app = express()

mongoose.connect(url, {useNewUrlParser:true});

const connection = mongoose.connection;
connection.on('open', (con) => {
    console.log('connected %j', con);
})

app.use(express.json())

app.use('/users', require('./routes/users'));

app.listen(8000, () => {
    console.log('server started');
})