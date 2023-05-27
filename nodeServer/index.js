//This is js for socket.io

const io = require('socket.io')(8000)

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

