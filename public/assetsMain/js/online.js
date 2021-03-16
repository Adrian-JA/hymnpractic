const socket = io()
 
let usersModeOnline = [] 
let multOn = document.querySelector('.multOn')
let contOnline = document.querySelector('.contOnline')
let viewRoom = document.querySelector('.viewRoom')

multOn.addEventListener('click',function(){
	contOnline.classList.remove('hide')
	homeBox.classList.add("hide")
	resultBox.classList.add("hide")
	viewRoom.classList.remove('hide')
    btnMenuQuiz.classList.remove("rotate")
	contMenuQuiz.classList.remove("showLvls")
	mobileOn.classList.remove("hide")
    resultModeLocal.classList.add('hide')
	mobileOn.classList.add('hide')
})


let createRoom = document.querySelector('.createRoom')
let btnCreateRoom = document.querySelector('.btnCreateRoom')
let inputJoinRoom = document.getElementById('inputJoinRoom')
let joinRoom = document.querySelector('.joinRoom')
let leaveRoom = document.querySelector('.leaveRoom')
let userOnline
let headerInfo = document.querySelector('.headerInfo')

let contInputOnline = document.querySelector('.contInputOnline') 
let viewOptions = document.querySelector('.viewOptions') 


btnCreateRoom.addEventListener('click',()=>{
	if(createRoom.value.length>4){ 
		 (async () => {
			 const {value: namesOnline} = await Swal.fire({
				title: 'Ingrese su nombre',
				inputAutoTrim:true,
				text:'evite el uso de espacios',
				confirmButtonText: 'Siguiente ',
				input: 'text',
				inputValue: '',
				allowOutsideClick: false,
				showCloseButton: true,
				inputValidator: (value ) => {
					if (!value) { 
					return 'Ingrese un nombre'
					}
				}
			});
			
			if(namesOnline){
			userOnline = namesOnline
			contInputOnline.classList.add('hide')
			let room = createRoom.value
			socket.emit('joinRoom',{namesOnline,room})
			viewOptions.classList.remove('hide')
		 }else{
			Swal.fire({
			title: "Error",
			text:"Debe de ingresar un nombre mayor a 2 letras",
			icon:"error"  
			}) 
		 }
		 })() 
		 
		 
	}else{
		
	}
	 
}) 

joinRoom.addEventListener('click',()=>{
	if(inputJoinRoom.value.length>4){ 
		 (async () => {
			 const {value: namesOnline} = await Swal.fire({
				title: 'Ingrese su nombre',
				inputAutoTrim:true,
				text:'evite el uso de espacios',
				confirmButtonText: 'Siguiente ',
				input: 'text',
				inputValue: '',
				allowOutsideClick: false,
				showCloseButton: true,
				inputValidator: (value ) => {
					if (!value) { 
					return 'Ingrese un nombre'
					}
				}
			});
			
			if(namesOnline){
			userOnline = namesOnline
			contInputOnline.classList.add('hide')
			let room = inputJoinRoom.value
			socket.emit('joinRoom',{namesOnline,room})
			headerInfo.classList.remove('hide')
		 }else{
			Swal.fire({
			title: "Error",
			text:"Debe de ingresar un nombre mayor a 2 letras",
			icon:"error"  
			}) 
		 }
		 })() 
		 
		 
	}else{
		
	}
})


let numPlayers = document.querySelector('.numPlayers')
let footInfo = document.querySelector('.footInfo')
let messages = document.querySelector('.messages') 
let idRoom = document.getElementById('idRoom')
let startOnline = document.querySelector('.startOnline')

let configModeOnline = document.querySelector('.configModeOnline')

let chatMessages = document.querySelector('.chat-messages')

socket.on('message',function(data){
	outputMessage(data) 
	
	
	chatMessages.scrollTop = chatMessages.scrollHeight;
	
})


function outputMessage(message) {
  /*const div = document.createElement('div');
  div.classList.add('message');*/
   
 /* const para = document.createElement('p');
  para.classList.add('text');
  para.innerText += message.text;
  div.appendChild(para);
  messages.appendChild(div);*/
  
	const div = document.createElement('div')
	div.classList.add('message')
	div.innerHTML = `<p class="meta">${message.username}<span>${message.time}</span></p>
	<p class="text">${message.text}</p>`  
	document.querySelector('.messages').appendChild(div)
}

function sendQuiz(){
let getNameForLocal = localStorage.getItem("getNameForQuiz")
let	getParseName = JSON.parse(getNameForLocal) 
let quizSelect = {
			title:'Seleccione el quiz a jugar',
			input:'select',
			showCancelButton: true,  
			inputOptions: {
				'Quiz': {
				  Quiz1: 'Quiz 1',
				  Quiz2: 'Quiz 2',
				  Quiz3: 'Quiz 3',
				  Quiz4: 'Quiz 4',
				},
				 'Quiz Guardados': []	 
			}, 
		 }
		 
		 if("getNameForQuiz" in localStorage){
			quizSelect.inputOptions['Quiz Guardados'] = getParseName  
		 }
		 
		 const {value: selectOpt} = Swal.fire(quizSelect).then((value) => {
			let quizSaveValue = quizSelect.inputOptions['Quiz Guardados']
			if(quizSelect.inputOptions['Quiz Guardados'][value.value]){
				let quizGuardadoSave = localStorage.getItem(getParseName[value.value]);
				let quizGuardado = JSON.parse(quizGuardadoSave);
				document.querySelector(".total-quiz").innerHTML = getParseName[value.value];
				quiz = quizGuardado  
				socket.emit('selectQuiz',quiz)
			}else{		 	
			let selectQuiz = [{
				'Quiz1':quiz1,
				'Quiz2':quiz2,
				'Quiz3':quiz3,
				'Quiz4':quiz4, 
			}] 
			quiz = selectQuiz[0][value.value] 
			socket.emit('selectQuiz',quiz)
			}  
  })
}



let animateOnline = document.querySelector('.animateOnline')
let textOnline = document.querySelector('.textOnline')
let mainInfo = document.querySelector('.mainInfo')
let userInfoOnline 

let userNameOnline = document.getElementsByClassName('userNameOnline')
 
socket.on('roomUsers', (data) => {
	userInfoOnline = data
	homeBox.classList.add('modeOnline')
	idRoom.innerHTML = `Sala:${data.room}`
	numPlayers.innerHTML = data.users.length 
    
	for(i = 0;i < data.users.length ;i++){ 
		 userNameOnline[i].innerHTML = `<p>${data.users[i].username}</p>`
	} 
	
	 
	
	
	 
	 console.log(data.users.length)
		if(data.users[0].id == socket.id){
			if(userInfoOnline.users.length > 1){
				/*configModeOnline.classList.remove('hide')
				configModeOnline.addEventListener('click',function(){
					sendQuiz()
				})*/
				
				startOnline.addEventListener('click',()=>{
				 	if(userInfoOnline.users.length > 1){
						socket.emit('startGame',quiz)
						footInfo.classList.add('hide')
						
					 }else{
						alert("son necesarios 2 jugadores para comenzar")
					} 
					
				}) 
				
				footInfo.classList.remove('hide')
				startOnline.classList.remove('hide')
				animateOnline.classList.add('hide')
				textOnline.innerHTML = ''
				console.log("condicion1")
				 
			}else if(userInfoOnline.users.length == 1){
				/*startOnline.addEventListener('click',function(){
				alert('Necesita haber mas de 2 jugadores para iniciar la partida dada')
				
				})*/
				console.log(data)
				console.log("condicion2")	
			}else{
				console.log("condicion3")
			}
			 
		}/*else if(data.users.length == 1){
			footInfo.classList.add('hide')
			
			configModeOnline.classList.remove('hide')
			configModeOnline.addEventListener('click',function(){
				alert('Necesita haber mas de 2 jugadores para cambiar la configuracion de la partida')
			})
			textOnline.innerHTML = `<p>son necesarias 2 o mas jugadores para iniciar</p>`
			animateOnline.classList.add('hide')	
			console.log("condicion 2")
		}*/else{ 
			animateOnline.classList.remove('hide')
			footInfo.classList.add('hide')
			animateOnline.classList.add('loadAnimate')
			textOnline.innerHTML = `<p>Espere hasta que el creador inicie la partida</p>`
			console.log("condicion 3")
		}
 
	
		
}); 

leaveRoom.addEventListener('click',function(){
	document.location.reload();
}) 
 
let contMainInfo = document.querySelector('.contMainInfo')
socket.on('startGame',(data)=>{
	homeBox.classList.remove('hide')
	quiz = data
	contMainInfo.classList.add('hide')
})

socket.on('correctAnswers',(data)=>{
	let resultsModeOnline = document.querySelector('.resultsModeOnline')
	resultsModeOnline.innerHTML += `<p>${data.namesOnline}: ${data.correctAnswers}</p>`
}) 

socket.on('selectQuiz',(data)=>{
	quiz = data
})


let sendMessage = document.querySelector('.sendMessage')
let writemsg = document.querySelector('.writemsg')
 


sendMessage.addEventListener('click',function(e){
	e.preventDefault();

	const msg = writemsg.value
	
	if (!msg) {
		return false;
	}
	
	socket.emit('chatMessage',msg)
	
	writemsg.value = ''
	writemsg.focus() 
 
})









