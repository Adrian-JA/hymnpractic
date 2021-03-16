/*var Dark mode*/ 
let toggleDark = document.querySelector('.allowDark');
let darkTl = document.querySelector('.darkTl');

/*var mode online Local*/
let saveNames = []
let scorePlayers = []
let scorePlayersIncorrect = []
let mobileOn = document.querySelector('.mobileOn')
let players = document.querySelector(".players")
let playersGame = document.querySelector(".playersGame")
let onliStart = document.querySelector(".onliStart")
let viewNames = document.getElementsByClassName("saveNames")
let resultModeLocal = document.querySelector(".resultModeLocal")

/*var create quiz*/
let quizNameStorage = []

/*Variables cards*/
let mainCard = document.querySelector('.main');
let btnQuit = document.querySelector('.btnQuit'); 
let logotipo = document.querySelector('.logotipo')

/*Var Menu devices mobiles*/
let iconHome = document.querySelector('#iconMain')
let menuFixed = document.querySelector('.menuFixed')
let iconConfig = document.querySelector('#iconConfig')

/*var Menu Quiz*/
let contMenuQuiz = document.querySelector('.cont-menu')
const btnMenuQuiz = document.querySelector('.icon-menu');
let contOptQuiz = document.querySelector('.contOptQuiz')
let levelSave = document.querySelector('.levelSave')
let getLevels = document.querySelector('.contLvl')
let lvlSave = document.querySelector('.levelsSave') 
let onClickBtn = document.getElementsByClassName("levelSave")
/*header Quiz */
let btnLeave = document.querySelector('.abandonar')
 
  
function closeMenuQuiz(){
	btnMenuQuiz.classList.remove('rotate')
	contMenuQuiz.classList.remove("showLvls")
	btnMenuQuiz.classList.add('hide')
} 
 
// Obtenemos el modo actual.
btnQuit.addEventListener('click',function(){ 
	
	
	
	btnSwitch.classList.remove('hide')
	colGame.classList.remove('hide')
	colHome.classList.remove('hide')
	colInfo.classList.remove('hide')
	colConfig.classList.remove('hide')
	modeGames.classList.remove("hide")
	btnSwitch.classList.remove("hide")
	carousel.classList.remove('hide')
	
	contMenuMin.classList.remove('onlyMic')
	main.classList.remove('hideMain')
	homeBox.classList.remove("modeLocal")
	
	closeMenuQuiz()
	exitquiz()
	leavequiz()
	
	btnQuit.classList.add("hide") 
	btnLeave.classList.add("hide")
	containerQuiz.classList.add('hide')
	resultModeLocal.classList.add("hide")
	mobileOn.classList.add("hide") 
	
	homeBox.classList.add("hide")
    contMenuMin.classList.add('show')
	
	resultBox.classList.add("hide");
/*	if(timerQuiz.classList.contains("hide")){}
	else {resetProgressTimer()
	timerCount = 0
	}*/
	// btnToggle.classList.remove('rotate')
 
	contentNames.innerHTML = ""
	saveNames = []
	numberName = 0	
	playersGame.innerHTML = "" 
	
})
  
let upload = document.querySelector('#uploadQuiz');
upload.addEventListener("click",()=>{
	Swal.fire({
  showCancelButton: true,
  icon: 'info',
  title: 'Cree y comparte su quiz!  ',
  confirmButtonText: 'Crear',
  cancelButtonText: 'Cancelar',
  confirmButtonColor:'#148F77',
  cancelButtonColor:'#E74C3C' 
}).then((result) =>{
	if(result.isConfirmed){
		 (async () => {
		const {value: nameQuiz} = await Swal.fire({
		title: 'Ingrese un nombre para su quiz',
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
	if(nameQuiz){
			let consola = document.getElementsByClassName("swal2-input")
			let quizSaveName = nameQuiz  

	 const{value: numberQuiz} = await Swal.fire({
				title: 'Ingrese el numero de pregunta que tendra su quiz',
				footer: 'Su quiz debe de tener mas de 2 preguntas' ,
				inputAutoTrim:true,
				confirmButtonText: 'Siguiente ',
				input: 'text',
				inputValue: '',
				showCloseButton: true,
				allowOutsideClick: false,
				inputValidator: (value) => {
					if (!parseInt(value)|| value < 1) {
					return 'Ingrese un numero'
					}else if(parseInt(value) == 1 ){
					 return 'Ingrese un numero mayor a 1'
					}else if(parseInt(value) > 30){
					 return 'Su quiz no puede tener mas de 30 preguntas'	
					}else{}
				 }
			})
if(numberQuiz){
	let arrPrin = []
	let par = parseInt(numberQuiz)
	let queue = []
	let objForArr = {
	title:"Complete los cuadros"
	}		
	
	for(let i=1;i<=par;i++){
		let increment = i
		queue.push(increment)
		arrPrin.push(objForArr) 
	}
let qToQuiz = [];
let aToQuiz = [];
let bToQuiz = [];
let cToQuiz = [];
let dToQuiz = [];
let eToQuiz = [];
 
let swalinput1 = document.querySelector(".swal2-input")
let swalinput2 = document.querySelector("#swal-input2")  
let swalinput3 = document.querySelector("#swal-input3")  
let swalinput4 = document.querySelector("#swal-input4")  
let swalinput5 = document.querySelector("#swal-input5")  
 
const {value:formValues} = Swal.mixin({
  confirmButtonText: 'Siguiente  ',
  focusConfirm: false ,
  showCloseButton: true,
  progressSteps: queue,
  allowOutsideClick: false,
  html:
    '<label for="swal-input1"> Ingrese pregunta</label>' +
    '<input id="swal-input1" class="swal2-input  >' +
	'<label for="swal-input2"> Ingrese respuesta</label>' +
	'<input id="swal-input2" class="swal2-input">' +
	'<label for="swal-input3"> Ingrese opcion erronea</label>' +
	'<input id="swal-input3" class="swal2-input">' +
	'<label for="swal-input4"> Ingrese opcion erronea</label>' +
    '<input id="swal-input4" class="swal2-input">'+
	'<label for="swal-input5"> Ingrese opcion erronea</label>' +
    '<input id="swal-input5" class="swal2-input">',
    preConfirm: () => {
  return[
     qToQuiz.push( document.getElementById('swal-input1').value), 
     aToQuiz.push( document.getElementById('swal-input2').value),
	 bToQuiz.push( document.getElementById('swal-input3').value),
	 cToQuiz.push( document.getElementById('swal-input4').value),
     dToQuiz.push( document.getElementById('swal-input5').value),
    ]
   }
}).queue ( arrPrin ).then((result) =>  {
  if (result.value) {
    //const answers = JSON.stringify(result.value)
		let quizSaveArr = []	
		for (i  = 0;i < par; i++){							
						quizSaveArr.push({
						q:qToQuiz[i],
						options:[aToQuiz[i],bToQuiz[i],cToQuiz[i],dToQuiz[i]],
						answer:0
						})
					} 
    Swal.fire({
      title: 'Bien Hecho!',
	  text:"¿Desea guardar su quiz?",
      confirmButtonText: 'Guardar Quiz',
	  cancelButtonText:"cancelar",
	  allowOutsideClick: false,
	  showCancelButton: true,
	  cancelButtonColor:'#E74C3C'  
    }).then((result) => {
  if (result.isConfirmed) {
	 localStorage.setItem(quizSaveName, JSON.stringify(quizSaveArr));
	 quizNameStorage.push(quizSaveName)
	 localStorage.setItem("getNameForQuiz",JSON.stringify(quizNameStorage))	
	
	 let getNameForLocal = localStorage.getItem("getNameForQuiz")
	 let getParseName = JSON.parse(getNameForLocal)
	  
	  if("getNameForQuiz" in localStorage){
		 
	  }else{  }
			document.getElementById("levelsSave").innerHTML = "";
				 
			for(let i=0;i<getParseName.length;i++){
						
				let btnSave = document.createElement("button")
					btnSave.classList.add("levelSave")
					btnSave.innerHTML = getParseName[i]
					lvlSave.appendChild(btnSave)	
							
				let quizGuardadoSave = localStorage.getItem(getParseName[i]);
				let quizGuardado = JSON.parse(quizGuardadoSave);
	
				onClickBtn[i].onclick = function(){
					quiz = quizGuardado	
						for (let i=0;i<quiz;i++){
							availableQuestions.push(quiz[i])
							}		
						document.querySelector(".total-quiz").innerHTML = getParseName[i];
						homeBox.querySelector(".total-questions").innerHTML = quiz.length;
						 
						resultBox.classList.add("hide");
						homeBox.classList.remove("hide");												
						answersIndicator();
						goToHome()	
						 mobileOn.classList.add("hide")	
 				 btnMenuQuiz.classList.remove("rotate")
		contMenuQuiz.classList.remove("showLvls")
					}
				}					
    Swal.fire({
	title: "Su quiz se ha guardado!",
	text:"encuentralo en la pestaña niveles",
    icon:"success"  
    })
  }
})
  }else  {  }
 }) 
}				 }//condicional number				  
}) ()
}
})
	btnMenuQuiz.classList.remove('rotate')
	contMenuQuiz.classList.remove("showLvls") 
}) 

 
window.onload = function(){
	// Checar que en el local storage no exista algo que evite que se muestre
    if ("getNameForQuiz" in localStorage) {
     //let darkos = localStorage.getItem('getNameForLocal')
	
	let getNameForLocal = localStorage.getItem("getNameForQuiz")
	let	getParseName = JSON.parse(getNameForLocal)
	console.log(getParseName)
	//let arrayNameToString = getParseName.toString()
		for(let i=0;i<getParseName.length;i++){
			let btnSave = document.createElement("button")
			btnSave.classList.add("levelSave")
			btnSave.innerHTML = getParseName[i]
			getLevels.appendChild(btnSave)
				
		let quizGuardadoSave = localStorage.getItem(getParseName[i]);
		let quizGuardado = JSON.parse(quizGuardadoSave);
	
	onClickBtn[i].onclick = function(){
		console.log(quizGuardado)
		quiz = quizGuardado
		
		for (let i=0;i<quiz;i++){
			availableQuestions.push(quiz[i])
		}
 
		document.querySelector(".total-quiz").innerHTML = getParseName[i];
		homeBox.querySelector(".total-questions").innerHTML = quiz.length;
	 
		resultBox.classList.add("hide");
		homeBox.classList.remove("hide");												
		answersIndicator();
		goToHome()	
		mobileOn.classList.add("hide")		
		 
		btnMenuQuiz.classList.remove("rotate")
		contMenuQuiz.classList.remove("showLvls")
			}			
		}
		
	} else{

	} 
}  
/*
 let opt4 = document.querySelector('.opt4');
let opt4Hide = document.querySelector('.opt4Hide');
let closeOpt = document.querySelector('.closeOpt');
 
opt4.addEventListener('click',()=> {
	opt4Hide.style.display = "block"	
}) 

closeOpt.addEventListener("click",()=>{
	opt4Hide.style.display = "none"
}) 
/*
let viewGuia = document.querySelector('#viewGuia')
let hideGuia = document.querySelector('.pdf')
let closePdf = document.querySelector('.closePdf')

viewGuia.addEventListener('click',()=>{
	hideGuia.style.display = "flex"
	 
	btnToggle.classList.toggle("rotate");
})

closePdf.addEventListener('click',()=>{
	hideGuia.style.display = "none"
})

let minCard = document.querySelector('.main-min');

 "tap swipe doubletap press panleft panright" */
 
 let minPage = document.querySelector(".min-page");
let minConfig = document.querySelector('.config-min'); 
 /*
let moveMinPage = new Hammer(minPage)
	moveMinPage.on('swipeleft',function(ev) {
		minPage.classList.remove("show") 
		mainCard.classList.add("show")
		minConfig.classList.remove("show")
		btnHome.classList.remove("iconDark")
		btnGames.classList.add("iconDark")
		btnConfig.classList.remove("iconDark")
	})
	
 
let moveMinCard = new Hammer(mainCard) 
	moveMinCard.on('swiperight',function(ev) {
		
		//mainCard.style.display = "block"
		minPage.classList.add("show") 
	mainCard.classList.remove("show")
	minConfig.classList.remove("show")
	btnHome.classList.add("iconDark")
	btnGames.classList.remove("iconDark")
	btnConfig.classList.remove("iconDark")
	})
	
	moveMinCard.on('swipeleft',function(ev) {
			minConfig.classList.add("show")
	minPage.classList.remove("show") 
	mainCard.classList.remove("show")
	btnConfig.classList.add("iconDark")
	btnHome.classList.remove("iconDark")
	btnGames.classList.remove("iconDark")
	})
		
let moveMinConfig = Hammer(document.getElementById("configMin"))
	moveMinConfig.on('panright',function(ev) {
	mainCard.classList.add("show")
	minConfig.classList.remove("show")
	minPage.classList.remove("show") 
	btnGames.classList.add("iconDark")
	btnHome.classList.remove("iconDark")
	btnConfig.classList.remove("iconDark")
		
	})		-/*/
 
/*
let btnHome = document.querySelector('.btnHome')
let btnGames = document.querySelector('.btnGames')
let btnConfig = document.querySelector('.btnConfig')

btnHome.addEventListener('click',function(){
	minPage.classList.add("show") 
	mainCard.classList.remove("show")
	minConfig.classList.remove("show")
	btnHome.classList.add("iconDark")
	btnGames.classList.remove("iconDark")
	btnConfig.classList.remove("iconDark")
 
})

btnGames.addEventListener('click',function(){
	mainCard.classList.add("show")
	minConfig.classList.remove("show")
	minPage.classList.remove("show") 
	btnGames.classList.add("iconDark")
	btnHome.classList.remove("iconDark")
	btnConfig.classList.remove("iconDark")
})

btnConfig.addEventListener('click',function(){
	minConfig.classList.add("show")
	minPage.classList.remove("show") 
	mainCard.classList.remove("show")
	btnConfig.classList.add("iconDark")
	btnHome.classList.remove("iconDark")
	btnGames.classList.remove("iconDark")
})
 

*/
btnMenuQuiz.addEventListener('click', function () {
	if(document.querySelector('.modeLocal')){
		contMenuQuiz.classList.remove('showLvls');
	    btnMenuQuiz.classList.remove("rotate");
		Swal.fire({
				icon: 'info',
				showCancelButton: true,
				title: 'Esta seguro de salir del modo multijugador?',
				confirmButtonText: 'Salir',
				cancelButtonText: 'Cancelar'
		}).then((result) => {
			if (result.isConfirmed) {
			alertExitGameLocal()
			}
		})
	}else{
		contMenuQuiz.classList.toggle('showLvls');
		btnMenuQuiz.classList.toggle("rotate");
	}	
}) 

function alertExitGameLocal(){
	mobileOn.classList.remove("hide")
	homeBox.classList.add("hide")
	scorePlayersIncorrect = []
	scorePlayers = []
	playersGame.innerHTML = "" 
	numberName = 0
	saveNames = []
	homeBox.classList.remove("modeLocal")
	Swal.fire({
		icon: 'info',
		title: 'acaba de abandonar el modo multijugador',
		toast: true,
		position: 'top-end',
		showConfirmButton: false, 
		timer: 3000,
		timerProgressBar: true,
	})
}

let resetPadding = document.querySelector('.cont-menu button')



let containSide = document.querySelector('.containSide')
let arrowBack = document.querySelector('.arrow-back')
let getLvlsBtn = document.querySelector('.getLvls')

 
getLvlsBtn.addEventListener('click',function(){ 
	contOptQuiz.classList.add("hide")
	getLevels.classList.remove("hide")
}) 
 
function hideLvls(){
	contOptQuiz.classList.remove("hide")
	getLevels.classList.add("hide") 
}
 
let online = document.querySelector('.online')
let contMult = document.querySelector('.contMult')
let customBox = document.querySelector('.custom-box')
let oneOne = document.querySelector('.oneOn')

online.addEventListener('click',function(){
	contMult.classList.remove("hide")
	contOptQuiz.classList.add("hide")
})

function hideContMult(){
	contMult.classList.add("hide")
	contOptQuiz.classList.remove("hide")
}

let innerAnswers = document.querySelector('.innerAnswers')
let innerInc = document.querySelector('.innerAnswersInc')
let nameUsers = document.querySelector(".nameUsers") 
 
let showNames = document.getElementsByClassName("showNames");	
let contentNames = document.querySelector(".contentNames")	

let domNames = document.querySelector('.domNames')
let tdAnswers = document.querySelector(".tdAnswers")
let tdIncorrect = document.querySelector(".tdIncorrect")

let innerPlayers = document.querySelector('.innerPlayers')
 let numberName = 0
oneOne.addEventListener('click',function(){
	contOnline.classList.add('hide')
	homeBox.classList.add("hide")
	resultBox.classList.add("hide")
    btnMenuQuiz.classList.remove("rotate")
	contMenuQuiz.classList.remove("showLvls")
	mobileOn.classList.remove("hide")
    resultModeLocal.classList.add('hide')
	if(document.querySelector('.domNames')){
 
	   
		let domNames = document.querySelectorAll('.domNames')
		let tdAnswers = document.querySelector(".tdAnswers")
		let tdIncorrect = document.querySelector(".tdIncorrect")
		//innerPlayers.removeChild(innerPlayers.childNodes[3])
		for(i=0;i<domNames.length;i++){
			innerPlayers.removeChild(innerPlayers.childNodes[3])
			innerAnswers.removeChild(innerAnswers.childNodes[3])
			innerInc.removeChild(innerInc.childNodes[3])
             		
		}
		
	}
}) 
 

players.addEventListener('click',function(){
 
const { value: ipAddress } =   Swal.fire({
  title: 'Ingrese los nombres de los jugadores',
  input: 'text',
 inputAutoTrim:true,
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'necesitas ingresar un nombre!'
    }
  }
}).then((result) =>  {
	if(result.value){
		saveNames.push(result.value)
		let newName = document.createElement("p")
		let newIconDelet = document.createElement("span")	
		newName.classList.add("saveNames")
			
		for( i=0;i<saveNames.length;i++){ 
			newName.innerHTML = saveNames[i] + `<i class="fas fa-trash-alt"></i>`
			playersGame.appendChild(newName)
	}	 	  
		newName.onclick = function(e){
			if (playersGame.contains(e.target)){
				playersGame.removeChild(newName)
				let nameDelete = newName.textContent
		        let spliceElem = saveNames.indexOf(nameDelete)  
			    let removedNames = saveNames.splice(spliceElem,1)
				let deleteElem = document.querySelectorAll('.saveNames')			
 }else{ }			
		}	
		 
	}
})	
})

	 onliStart.addEventListener("click",function(){	 
	let getNameForLocal = localStorage.getItem("getNameForQuiz")
	let	getParseName = JSON.parse(getNameForLocal) 
			//console.log(saveNames.length)
if(document.querySelectorAll(".saveNames").length > 1){ 
Swal.fire({
  icon: 'info',
  title: 'Desea jugar?',
  confirmButtonText: 'Si',
  cancelButtonText:'No', 
  showCancelButton: true,  
}).then((result) => {
	if(result.isConfirmed){
		 let objDate = {
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
			objDate.inputOptions['Quiz Guardados'] = getParseName  
		 }
		 
		 for(i=0;i<saveNames.length;i++){
			scorePlayers.push("0") 		 
			scorePlayersIncorrect.push("0")  
		}
		
		const {value: selectOpt} = Swal.fire(objDate ).then((value) => {
			let quizSaveValue = objDate.inputOptions['Quiz Guardados']

			if(value.value == 'Quiz1'){
				quiz = quiz1		
				document.querySelector(".total-quiz").innerHTML = "#1";

				quizForOnline()
			}else if(value.value == 'Quiz2'){
				quiz = quiz2		
				document.querySelector(".total-quiz").innerHTML = "#2";
				quizForOnline()
			}else if(value.value == 'Quiz3'){
				quiz = quiz3		
				document.querySelector(".total-quiz").innerHTML = "#3";
				quizForOnline()
			}else if(value.value == 'Quiz4'){
				quiz = quiz4		
				document.querySelector(".total-quiz").innerHTML = "#4";
				quizForOnline()
			}else if(value.value == undefined){
				 
			}else{		 
				let quizGuardadoSave = localStorage.getItem(getParseName[value.value]);
				let quizGuardado = JSON.parse(quizGuardadoSave);
				document.querySelector(".total-quiz").innerHTML = getParseName[value.value];
				quiz = quizGuardado 
				quizForOnline()	
 
			}  
  })	
	}	
})
			}else{
				Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Debe agregar dos o mas jugadores!'
				})
			}
		})

resetGameLocal = document.querySelector(".resetGameLocal")  
leaveGameLocal = document.querySelector(".leaveGameLocal")
 

leaveGameLocal.addEventListener('click',function(){
	homeBox.classList.remove("modeLocal") 
	mobileOn.classList.remove("hide")
	
	resultModeLocal.classList.add("hide")
	
	scorePlayersIncorrect = []
	scorePlayers = []
	playersGame.innerHTML = "" 
	numberName = 0
	saveNames = []
	 if(document.querySelector('.domNames')){
        deleteTable()	
	} 
	if(timerQuiz.classList.contains("hide")){	
	}else {
		clearInterval(timer);
		resetProgressTimer()
		timerCount = 0
		
	}
})
  
resetGameLocal.addEventListener('click',function(){
    quizForOnline()		
    numberName = 0	 
    //resetQuiz()
	scorePlayersIncorrect = []
	scorePlayers = []
	homeBox.classList.add("modeLocal") 
	
	 for(i=0;i<saveNames.length;i++){
			scorePlayers.push("0") 		 
			scorePlayersIncorrect.push("0")  
		}
 
	 if(document.querySelector('.domNames')){
        deleteTable()	
	} 
		resultModeLocal.classList.add("hide")
})	

function deleteTable(){
	let domNames = document.querySelectorAll('.domNames')
	let tdAnswers = document.querySelector(".tdAnswers")
	let tdIncorrect = document.querySelector(".tdIncorrect")
		 
	for(i=0;i<domNames.length;i++){
		innerPlayers.removeChild(innerPlayers.childNodes[3])
		innerAnswers.removeChild(innerAnswers.childNodes[3])
		innerInc.removeChild(innerInc.childNodes[3])   		
	} 
} 	


let startModeLocal = document.querySelector(".startModeLocal")
let nextModeLocal = document.querySelector(".nextModeLocal")
 
function quizForOnline(){
	resetGameLocal = document.querySelector(".resetGameLocal")  
	leaveGameLocal = document.querySelector(".leaveGameLocal")
	
	homeBox.classList.add("modeLocal")
	mobileOn.classList.add("hide")
	goToHome()
	homeBox.querySelector(".total-questions").innerHTML = quiz.length;
}

startModeLocal.addEventListener('click',function(){
	if(document.querySelector('.modeLocal')){
		contentNames.innerHTML = saveNames[numberName]
		numberName++ 
		scoreModeLocal()
	}	
})
 
nextModeLocal.addEventListener('click',function(){ 
	if(document.querySelector('.modeLocal')){	
		if(numberName === saveNames.length  ){ 
			numberName = 0
			contentNames.innerHTML = saveNames[numberName]
			numberName++ 
		}else{
			contentNames.innerHTML = saveNames[numberName] 
			numberName++ 
		} 
		scoreModeLocal()
	}	
})

function scoreModeLocal(){
	 let options = optionContainer.children 
	 for(let i=0;i<options.length;i++){		
		 options[i].addEventListener('click',function(){
			 if(document.querySelector('.localModeCorrect')){	
 		 
				let indexArr = saveNames.indexOf(contentNames.textContent)
				let sumarTodo = parseInt(scorePlayers[indexArr]) + 1
			 
				if(scorePlayers[indexArr] > 0){
					scorePlayers.splice(indexArr,1, sumarTodo) 
				}else{
					scorePlayers.splice(indexArr,1,0+1) 
				}			
			 }else if(document.querySelector('.localModeIncorrect') ){
				let indexArr = saveNames.indexOf(contentNames.textContent)
				let sumarTodo = parseInt(scorePlayersIncorrect[indexArr]) + 1
				if(scorePlayersIncorrect[indexArr] > 0){
					scorePlayersIncorrect.splice(indexArr,1, sumarTodo) 
				}else{
					scorePlayersIncorrect.splice(indexArr,1,0+1) 
				} 
			 }else{
				  
			 }	 
		 })			
		}
 }

function showResults(){ 
	resultBox.classList.add("hide")
	resultModeLocal.classList.remove("hide")
	
	for(i=0;i<saveNames.length;i++){
		let td = document.createElement("td")
		td.innerHTML = saveNames[i]
		td.classList.add("domNames") 
		innerPlayers.appendChild(td) 
						 
		let tdAnswers = document.createElement("td")
		let tdIncorrect = document.createElement("td")
					  
		tdAnswers.innerHTML = scorePlayers[i]
		tdAnswers.classList.add("tdAnswers")
		innerAnswers.appendChild(tdAnswers) 

		tdIncorrect.innerHTML = scorePlayersIncorrect[i]
		tdIncorrect.classList.add("tdIncorrect")
		innerInc.appendChild(tdIncorrect) 
		} 
}
 