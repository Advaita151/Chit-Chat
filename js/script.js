const socket = io('http://localhost:8000');




const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.getElementById('.container');

const naam = prompt("Enter you name to join");
socket.emit('new-user-joined', naam);