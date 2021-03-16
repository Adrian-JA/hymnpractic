const socket = io()

let message = document.getElementById('message')
let username = document.getElementById('username')
let send = document.getElementById('send')
let output = document.getElementById('output')
let actions = document.getElementById('actions')


 
send.addEventListener('click',function(){
	socket.emit('chatMessage',{
		username:username.value,
		message:message.value
	})
})



message.addEventListener('keypress',function(){ 
	socket.emit('chatTyping',username.value)
})

socket.on('chat',function(data){
	message.value = ''
	actions.innerHTML = ''
	output.innerHTML += `<p>
	<strong>${data.username}</strong>:${data.message}
	</p>`
})

socket.on('typing',function(data){
	actions.innerHTML = `<p><em>${data} esta escribiendo</em></p>`
})  

let select = document.getElementById("channel")

select.addEventListener('change',()=>{
	socket.emit('change channel',select.value)
	console.log(select.value)
})

socket.on('change channel',function(channel){
	actions.innerHTML = "Bienvenido al Canal" + channel
})

let inputRoom = document.querySelector('.inputRoom')
let btnCreateRoom = document.getElementById('btnCreateRoom')

btnCreateRoom.addEventListener('click',()=>{
	if(inputRoom.value.length > 3){
			socket.emit('createRoom',inputRoom.value)
	}else{
		alert('Error')
	}	
})

let joinRoom = document.getElementById('joinRoom')
let btnJoinRoom = document.getElementById('btnJoinRoom')

btnJoinRoom.addEventListener('click',function(){
	console.log(joinRoom.value)
	if(joinRoom.value.length > 3){
		socket.emit('joinRoom',joinRoom.value)
	}else{
		alert('Error')
	}
})



