const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/crudDb'

const app = express()

mongoose.connect(url, {useNewUrlParser:true}).then((res) => {
    console.log('mongoose connected ... %j', res);
}).catch((reason) => {
    console.log('reason %j', reason);
});



const connection = mongoose.connection;
connection.on('open', (con) => {
    console.log('connected %j', con);
})

app.use(express.json())

app.use('/users', require('./routes/users'));

app.listen(8000, () => {
    console.log('server started');
})