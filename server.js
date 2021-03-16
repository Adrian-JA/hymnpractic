const path = require('path') 
const express = require('express')
const app = express()
const moment = require('moment')

//Configs
app.set('port', process.env.PORT || 3000)

//Static Files
app.use(express.static(path.join(__dirname, 'public')))

//Start Server
const server = app.listen(app.get('port'),()=>{
	console.log('puerto',app.get('port'))
})

const SocketIO = require('socket.io')
const io = SocketIO(server)

function formatMessage(username,text){
	return{
		username,
		text,
		time: moment().format('h:mm a')
	}
} 

const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('./utils/users');
 
 
const botName = 'Bienvenida';
let channel
 
io.on('connection',(socket)=>{ 
socket.on('joinRoom',({namesOnline, room})=>{
		const user = userJoin(socket.id, namesOnline, room);
		socket.join(user.room)
		channel = user.room
 //formatMessage(botName, 'Welcome to ChatCord!'));
		io.sockets.to(user.room).emit('message',formatMessage(botName ,`${user.username} se acaba de unir a la partida.` ) );
 
	  
		io.to(user.room).emit('roomUsers', {room: user.room,users: getRoomUsers(user.room)})
	})
	
	socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if (user) { 
      io.to(user.room).emit(
        'message',
        formatMessage( `${user.username} acaba de abandonar la sala`)
      );

      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });
    }
  });
 

socket.on('startGame',(data)=>{
	io.sockets.in(channel).emit('startGame',data)
})	
	
socket.on('correctAnswers',(data)=>{
	io.sockets.in(channel).emit('correctAnswers',data)
}) 

socket.on('selectQuiz',(data)=>{
	io.sockets.in(channel).emit('selectQuiz',data)
})

socket.on('chatMessage',msg=>{ 
	const user = getCurrentUser(socket.id);
	
		io.emit('message',formatMessage(user.username,msg))
	})
	
 }) 


	 
	
	
	
	 