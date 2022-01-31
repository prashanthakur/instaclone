const express = require('express');
const app = express()
const mongoose = require('mongoose')
const PORT= process.env.PORT || 5000;
const {MONGOURI} = require('./config/keys')


mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongoDb Yeah!")
})
mongoose.connection.on('error',()=>{
    console.log("Error in connecting")
})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))



app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})
