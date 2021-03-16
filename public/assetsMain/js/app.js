const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator")
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");


let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];       
let availableOptions = [];			
let correctAnswers = 0;			
let attempt = 0;
let classd = document.getElementsByClassName("level");

// agregar las preguntas en el arreglo availableQuestions 
function setAvailableQuestions(){
	let totalQuestion = quiz.length;
		
		for (let i=0;i<totalQuestion;i++){
		availableQuestions.push(quiz[i])
		
	}
}
// Establecer numero de preguntas y opciones
	function getNewQuestion(){	
		//Establece el numero de preguntas
		questionNumber.innerHTML = "Preguntas " + (questionCounter + 1) + " de " + quiz.length;
		// establecer el texto de la pregunta
		// obtener una pregunta aleatoria
		
		const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
		 
		currentQuestion = questionIndex;
		questionText.innerHTML = currentQuestion.q;
		// obtener una pregunta aleatoria de 'questionIndex' del arreglo disponible
		const index1= availableQuestions.indexOf(questionIndex);
		//remover el 'questionIndex' del arreglo availableQuestions, para que no se repita la pregunta
		availableQuestions.splice(index1,1);
		
		//establecer opciones
		//obtener la posicion de 'questionIndex ' del arreglo de availableQuestions 
		const optionLen = currentQuestion.options.length;
		//muestra las opciones dentro del arreglo availableOptions
		for (let i=0; i<optionLen;i++){
		availableOptions.push(i)
		}
		optionContainer.innerHTML = '';
		let animationDelay = 0.15;
		//crear las opciones em html
		for(let i=0;i<optionLen;i++){
			//opcion aleatoria
			const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
			//obtener la posicion de 'optonIndex' del arreglo availableOptions 
			const index2 = availableOptions.indexOf(optonIndex);
			//remover el 'optonIndex' del arreglo availableOptions , para que la opción no se repita
			availableOptions.splice(index2,1);
			const option = document.createElement("div");
			option.innerHTML = currentQuestion.options[optonIndex]
			option.id = optonIndex;
			option.style.animationDelay = animationDelay + 's';
			animationDelay = animationDelay + 0.15;
			option.className = "option";
			optionContainer.appendChild(option)
			option.setAttribute("onclick","getResult(this)");
		}
	questionCounter++
}	
 
// obtener el resultado de la pregunta del intento actual
function getResult(element){
	const id = parseInt(element.id);
	
	// obtenga la respuesta comparando la identificación de la opción seleccionada
	if(id === currentQuestion.answer){
		//establecer el color verde en la opción correcta
		element.classList.add("correct");
		element.classList.add("localModeCorrect")
		//agregue el indicador a la marca correcta
		updateAnswerIndicator("correct");
		correctAnswers++;
		
	}else{
		//establecer el color rojo en la opción incorrecta
		element.classList.add("wrong");
		element.classList.add("localModeIncorrect")
		//agregar el indicador a la marca incorrecta
		updateAnswerIndicator("wrong");
		
		// si la respuesta es incorrecta, muestre la opción correcta agregando color verde la opción correcta
		const optionLen = optionContainer.children.length;
		for(let i=0;i<optionLen;i++){
			if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
				optionContainer.children[i].classList.add("correct");
			}
		}
	}
	attempt++;
	unclickableOptions();
}	

//hacer que no se pueda hacer clic en todas las opciones una vez que el usuario seleccione una opción (RESTRINGIR AL USUARIO PARA CAMBIAR LA RESPUESTA)
function unclickableOptions(){
	const optionLen = optionContainer.children.length;
	for (let i=0; i <optionLen;i++){
		optionContainer.children[i].classList.add("already-answered");	
	}	
}
	
function answersIndicator(){
	answersIndicatorContainer.innerHTML = '';
		const totalQuestion = quiz.length;
		for (let i=0;i<totalQuestion; i++){
			const indicator = document.createElement("div");
			answersIndicatorContainer.appendChild(indicator);
	}
}

function updateAnswerIndicator(markType){
	answersIndicatorContainer.children[questionCounter-1].classList.add(markType)
}
	
function next(){
	if(questionCounter === quiz.length){ 
		quizOver();
		btnMenuQuiz.classList.remove("hide")
		btnLeave.classList.add("hide")
		if(homeBox.classList.contains("modeLocal")){
			showResults()
		}else{} 
		homeBox.classList.remove("modeLocal") 
		contentNames.innerHTML = ""
	}else{
		getNewQuestion();
	}
}	

function quizOver(){/*
	 if(timerQuiz.classList.contains("hide")){
		}else{
			clearInterval(timer);
			circle.stop()
			progress.innerHTML=""
		}*/
	quizBox.classList.add("hide");
	resultBox.classList.remove("hide");
	quizResult();
	
	if(homeBox.classList.contains('modeOnline')){
		let resultsModeOnline = document.querySelector('.resultsModeOnline')
		resultBox.classList.add('hide')
		resultsModeOnline.classList.remove('hide')
		console.log(userOnline)
		socket.emit('correctAnswers',{
			
									correctAnswers,
									namesOnline:userOnline})
	}
}

function quizResult(){
	resultBox.querySelector(".total-question").innerHTML = quiz.length;
	resultBox.querySelector(".total-attempt").innerHTML = attempt;
	resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
	resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
	const percentage = (correctAnswers/quiz.length)*100;
	resultBox.querySelector(".percentage").innerHTML =percentage.toFixed(2) + "%";
	resultBox.querySelector(".total-score").innerHTML =correctAnswers + " / " + quiz.length;
}

function resetQuiz(){
	 questionCounter = 0;
	 currentQuestion;
	 attempt = 0;
	 correctAnswers = 0;
}

function tryAgainQuiz(){
	//ocultar el cuadro de resultados
	resultBox.classList.add("hide");
	// mostrar el quizBox
	quizBox.classList.remove("hide");
	resetQuiz();
	startQuiz();
}

function goToHome(){
	//ocultar cuadro de resultados
	resultBox.classList.add("hide");
	//mostrar caja de inicio
	homeBox.classList.remove("hide");
	
	resetQuiz();
}

function regresar(){
	goToHome();
	startQuiz();
}

//	#### punto de partida ####
function startQuiz(){
	//hide hombe box
	homeBox.classList.add("hide");
	//show quiz Box
	quizBox.classList.remove("hide");
	
	//Primero establecemos las preguntas en el arreglo availabeQuestions 
	setAvailableQuestions();
	//segundo llamaremos a la funcion getNewQuestion(); 
	getNewQuestion();
	// para crear indicador de respuestas
	answersIndicator();
	contMenuQuiz.classList.remove("showLvls")
	btnMenuQuiz.classList.remove('rotate')
	
	contMenuQuiz.classList.remove("showLvls")
	btnMenuQuiz.classList.remove('rotate')
	//btnToggle.classList.toggle("iconSide")
 
	//resetMenu.classList.remove("sideLvl")
    btnLeave.classList.remove("hide") 
	btnMenuQuiz.classList.add('hide')
	
	if(homeBox.classList.contains('modeOnline')){
		
		mainInfo.classList.add('hide')
	}
	
/*	if(timerQuiz.classList.contains("hide")){
	}else{
		startCountdown()
	}*/
 
	
}
 window.onload = function(){
	homeBox.querySelector(".total-questions").innerHTML = quiz.length;
 }

classd[0].onclick = function(){
	quiz = quiz1 
		for (let i=0;i<quiz;i++){
		availableQuestions.push(quiz[i])
	}
	document.querySelector(".total-quiz").innerHTML = "#1";
	fResetQuiz()
}

classd[1].onclick = function(){
	quiz= quiz2
		for (let i=0;i<quiz2;i++){
		availableQuestions.push(quiz2[i])
	}
	document.querySelector(".total-quiz").innerHTML = "#2";
	fResetQuiz()
}

classd[2].onclick = function(){
	quiz = quiz3
		for (let i=0;i<quiz3;i++){
		availableQuestions.push(quiz3[i])
	}
	document.querySelector(".total-quiz").innerHTML = "#3";
	fResetQuiz()
}

classd[3].onclick = function(){
	quiz = quiz4
		for (let i=0;i<quiz4;i++){
		availableQuestions.push(quiz4[i])
	}
	document.querySelector(".total-quiz").innerHTML = "#4";
	
	fResetQuiz()
}

function fResetQuiz(){
	//mobileOn.classList.add("hide")
	contMenuQuiz.classList.remove("showLvls")
	btnMenuQuiz.classList.remove('rotate')
	resultBox.classList.add("hide");
	homeBox.classList.remove("hide");
	homeBox.querySelector(".total-questions").innerHTML = quiz.length;
	answersIndicator();
	goToHome()
	contOnline.classList.add('hide')
	//resultModeLocal.classList.add("hide")
 
}

let leave = document.querySelector('.leave')

function leavequiz(){
	questionCounter = 0;
	currentQuestion;
	availableQuestions = [];       
	availableOptions = [];			
	correctAnswers = 0;			
	attempt = 0;
/*	btnLeave.classList.add("hide")
    btnMenuQuiz.classList.remove("hide")*/
	 quizOver()
}
 
 
leave.addEventListener('click',function(){
	leavequiz()
	btnLeave.classList.add("hide")
	btnMenuQuiz.classList.remove("hide")
 
	if(document.querySelector('modeLocal')){
		showResults()
		resultModeLocal.classList.remove("hide")
		homeBox.classList.remove("modeLocal") 
		
		contentNames.innerHTML = ""
		saveNames = []
		numberName = 0	
		playersGame.innerHTML = "" 
		 
	}
		
})

function exitquiz(){
	questionCounter = 0;
	currentQuestion;
	availableQuestions = [];       
	availableOptions = [];			
	correctAnswers = 0;			
	attempt = 0;
}

