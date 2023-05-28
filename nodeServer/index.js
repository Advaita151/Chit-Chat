//This is js for socket.io

const io = require('socket.io')(8000)
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(cors())
require('dotenv').config()

/*const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.get("/", (req,res) => {
    res.send("Welcome")
})

app.listen(port, (req,res) =>{
    console.log(`Server is running on port: ${port}`)
})

mongoose.connect(uri, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => console.log("MongoDb connection established")).catch((error) => console.log("MongodB connection failed: ", error.message))*/


const users ={};


io.on('connection',socket =>{
    socket.on('new-user-joined', naam =>{
        console.log("New user", naam)
        users[socket.id] = naam;
        socket.broadcast.emit('user-joined', naam);
    });

    socket.on('send', message =>{
        socket.broadcast.emit('recieve', {message: message, naam: users[socket.id]})
    });
})

