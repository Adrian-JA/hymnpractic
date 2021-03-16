 
 
let rules = document.querySelector('.rules')
let knowLvl = document.querySelector('.knowLvl')
 
knowLvl.addEventListener('click',function(){
	Swal.fire(
  'Para salir del quiz',
  `debe de dar click en <br><br><i class="fas fa-arrow-left"></i>`,
)
}) 

rules.addEventListener('click',function(){
	Swal.mixin({
  confirmButtonText: 'Siguiente',
  showCancelButton: true,
  progressSteps: ['1', '2', '3', ]
}).queue([
 
  {
    title: 'Agregar Jugadores',
    text: 'agregue los nombres de las personas a jugar. ',
	footer: 'Para este modo solo se necesita un dispositvo. ' 
  },
  {
	title: 'Darle a listo!',
    text: 'Y seleccione el quiz a jugar. ' 
	
  },
  {
	title: 'Al iniciar el quiz',
    text: 'en la esquina inferior izquierda se mostrara el nombre de la persona que debe de responder.', 
    footer: 'El juego consistira por turnos.' 
 }
 
])
})
 /*
 
let valor   
let configQuiz = document.querySelector(".configQuiz")
let timerQuiz = document.querySelector(".timerQuiz")
let objectConfigQuiz

configQuiz.addEventListener('click',function(){
const { value: fruit } =  Swal.fire({
  title: 'Opciones',
  text:'Temporizador',
  input: 'select',
  inputOptions: {
      activar: 'Activar',
      desactivar: 'Desactivar',
  },
  inputPlaceholder: 'opciones',
  showCancelButton: true,
  inputValidator: (value) => {
    return new Promise((resolve) => {
      if (value === 'activar') {
		  console.log("activar")
		  timerQuiz.classList.remove("hide")
		  
        resolve()
      } else {
        resolve()
		console.log("desactivar")
      }
    })
  }
//})
/* =  Swal.fire({
	title: 'Multiple inputs',
	input:'text',
	html:
	'<input id="swal-input1" class="swal2-input">' ,
	
	
	 inputValidator: (value) => {
    return new Promise((resolve) => {
      if (value === 'oranges') {
        resolve()
      } else {
        resolve('You need to select oranges :)')
      }
    })
  }*/
	
	
	
	
	
 /*
	preConfirm: () => {
		valor = document.getElementById('swal-input1').value
		  inputValidator: (valor) => {
			  console.log(valor)
			if (value) {
				console.log("1")
			  return 'You need to write something!'
			}else{
				console.log("2")
			}
		  }*/
		/*valor = document.getElementById('swal-input1').value
		if(valor = "adrian"){
			console.log("asd")
		}*/
	//value = document.getElementById('swal-input1').value
	//console.log(fruit)
	/*valor = document.getElementById('swal-input2').value*//* [
	
	document.getElementById('swal-input1').value,
	document.getElementById('swal-input2').value
	]*/
	
  //},

//})
 
/*const { value: fruit } = 
  title: 'Opciones',
  input: 'select',
 
  inputOptions: {
      activar: 'Activar',
      desactivar: 'Desactivar',
  },
   html:
    '<h2></h2>'+
    '<input id="swal-input1" class="swal2-input">' +
    '<input id="swal-input2" class="swal2-input">', 
  inputPlaceholder: 'opciones',
  showCancelButton: true,
  inputValidator: (value) => {
    return new Promise((resolve) => {
      if (value === 'activar') {
		  console.log("activar")
		  timerQuiz.classList.remove("hide")
		  
        resolve()
      } else {
        resolve()
		console.log("desactivar")
      }
    })
  }
}//)*//*
})
 let progress = document.querySelector(".progress")
let nextBtn = document.querySelector(".nextBtn")
 let timer
 let timerCount = 0
 let timerTotal = 4
  let progressBar = document.getElementById("progressBar")
  
 

let duration = 4000
let circle 
function startCountdown(){
	 circle = new ProgressBar.Line(progress, {
		trailColor:'#ccc',
        duration: duration,
		color:'#06ae8c'
      
    });
 
	 circle.animate(1);
	
	 timer = setInterval(function(){
		  timerCount++
 
		 if(timerTotal == timerCount){
			timerCount = 0
			next()
			
			if(circle.value = 1 ){
			    resetProgressTimer()
			}
		 }
		},1000)
}

nextBtn.addEventListener('click',function(){
	  resetProgressTimer()
	  timerCount = 0
})
  
function resetProgressTimer(){
	circle.set(0) 
	circle.value = 0
	circle.animate(1);
	
}*/
 
 
 
 
let micStart = document.querySelector('.micStart');
let micStop = document.querySelector('.micStop');

micStart.addEventListener('click',function(){
	micStop.classList.remove("hide")
	micStart.classList.add("hide")
	 
})

micStop.addEventListener('click',function(){
	micStop.classList.add("hide")
	micStart.classList.remove("hide")
 
})
 

const btnSwitch = document.querySelector('.switch');
 

 
function darkMode(){
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
     
	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
 allowDark()
} 

 
let onDark = document.querySelector(".onDark") 
let offDark = document.querySelector(".offDark")
 
function allowDark(){
	onDark.classList.toggle("hide")
	offDark.classList.toggle("hide")	 
}
 

if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');	
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');	
}

 
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
	});
});

let main = document.querySelector('.main')
let rspnsvConfig = document.querySelector('.rspnsvConfig')
let modeGames = document.querySelector('.modeGames')
let rspnsvInfo = document.querySelector('.rspnsvInfo')

let colHome = document.querySelector('.colHome') 
let colGame = document.querySelector('.colGame')
let colConfig = document.querySelector('.colConfig')
let colInfo = document.querySelector('.colInfo')
 

colGame.addEventListener('click',function(){
	modeGames.classList.remove('hideRspnsv')
	main.classList.add("hideRspnsv")
	rspnsvInfo.classList.add("hide")
	rspnsvConfig.classList.add("hide")
	colGame.classList.add("active")
	colHome.classList.remove("active")
	colInfo.classList.remove("active")
	colConfig.classList.remove("active")
})

colHome.addEventListener('click',function(){
	modeGames.classList.add('hideRspnsv')
	main.classList.remove("hideRspnsv")
	rspnsvInfo.classList.add("hide")
	rspnsvConfig.classList.add("hide")
	colGame.classList.remove("active")
	colHome.classList.add("active")
	colInfo.classList.remove("active")
	colConfig.classList.remove("active")
}) 

colInfo.addEventListener('click',function(){
	modeGames.classList.add('hideRspnsv')
	main.classList.add("hideRspnsv")
	rspnsvInfo.classList.remove("hide")
	rspnsvConfig.classList.add("hide") 
	colGame.classList.remove("active")
	colHome.classList.remove("active")
	colInfo.classList.add("active")	
	colConfig.classList.remove("active")
})

colConfig.addEventListener('click',function(){
	modeGames.classList.add('hideRspnsv')
	main.classList.add("hideRspnsv")
	rspnsvInfo.classList.add("hide")
	rspnsvConfig.classList.remove("hide")
	colGame.classList.remove("active")
	colHome.classList.remove("active")
	colInfo.classList.remove("active")
	colConfig.classList.add("active")
}) 

let gameCuestionary = document.getElementById('gameCuestionary')
let containerQuiz = document.getElementById('containerQuiz')
let carousel = document.getElementById('carousel')
let contMenuMin = document.querySelector('.contMenuMin')

let hideMain = document.querySelector('.hideMain')

gameCuestionary.addEventListener('click',function(){
	modeGames.classList.add('hide')
	carousel.classList.add('hide')
	colGame.classList.add('hide')
	colHome.classList.add('hide')
	colInfo.classList.add('hide')
	colConfig.classList.add('hide')
	btnSwitch.classList.add('hide')
	homeBox.classList.remove('hide')
	
	main.classList.add('hideRspnsv')
	contMenuMin.classList.add('onlyMic')
	main.classList.add('hideMain')	
	
	btnQuit.classList.remove('hide')
	btnMenuQuiz.classList.remove('hide')
	containerQuiz.classList.remove('hide')
})


 
