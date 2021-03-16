const expresiones = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,20}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	cellphone: /^\d{7,14}$/ // 7 a 14 numeros.
}

const camposLog = {
	user: false,
	password: false
}

const camposReg = {
	user_reg: false,
	email_reg: false,
	password_reg: false
}

let signInForm = document.getElementById('sign-in-form'); 
let inputSignIn = document.querySelectorAll('#sign-in-form input'); 
let iconCheck = document.getElementsByClassName('iconCheck'); 
 


const checkForm = (e) =>{
	 
	 switch(e.target.name){
		 
		 case "user":
			checkValue(expresiones.user, e.target, 'user')
		 break;	
		 case "password":
			checkValue(expresiones.password, e.target, 'password')	
		 break;
         

		 
	 } 
}

const checkValue = (expression,input,camp)=>{
	if(expression.test(input.value)){
				 document.querySelector(`.group__${camp}`).classList.add("valueCorrect")
				 document.querySelector(`.group__${camp}.iconCheck`).classList.remove("valueIncorrect")
				 
				 document.querySelector(`.group__${camp}.iconCheck i`).classList.remove("fa-times-circle")
				 document.querySelector(`.group__${camp}.iconCheck i`).classList.add("fa-check-circle")
				 
				 document.querySelector(`.group__${camp}.errorValue`).classList.remove("show")
			
				camposLog[camp] = true
			}else{
				 document.querySelector(`.group__${camp}.iconCheck`).classList.add("valueIncorrect")
				 document.querySelector(`.group__${camp}.iconCheck i`).classList.add("fa-times-circle") 
			     document.querySelector(`.group__${camp}.errorValue`).classList.add("show") 
				camposLog[camp] = false
			}
} 

let signUpForm = document.getElementById('sign-up-form'); 
let inputSignUp = document.querySelectorAll('#sign-up-form input');  

const checkFormReg = (e) =>{
	 
	 switch(e.target.name){
		 
		 case "regUser":
			checkValueReg(expresiones.user, e.target, 'user_reg')
		 break;	
		 case "regEmail":
			checkValueReg(expresiones.email, e.target, 'email_reg')	
		 break;
		 case "regPassword":
			checkValueReg(expresiones.password, e.target, 'password_reg')	
		 break;
         

		 
	 } 
}

const checkValueReg = (expression,input,camp)=>{
	if(expression.test(input.value)){
				 document.querySelector(`.group__${camp}`).classList.add("valueCorrect")
				 document.querySelector(`.group__${camp}.iconCheck`).classList.remove("valueIncorrect")
				 
				 document.querySelector(`.group__${camp}.iconCheck i`).classList.remove("fa-times-circle")
				 document.querySelector(`.group__${camp}.iconCheck i`).classList.add("fa-check-circle")
				 
				 document.querySelector(`.group__${camp}.errorValue`).classList.remove("show")
				 camposReg[camp] = true
			}else{
				 document.querySelector(`.group__${camp}.iconCheck`).classList.add("valueIncorrect")
				 document.querySelector(`.group__${camp}.iconCheck i`).classList.add("fa-times-circle") 
			     document.querySelector(`.group__${camp}.errorValue`).classList.add("show") 
				 camposReg[camp] = false
			}
} 


inputSignUp.forEach((input) => {
	input.addEventListener('keyup', checkFormReg)
	input.addEventListener('blur', checkFormReg)
})

inputSignIn.forEach((input) => {
	input.addEventListener('keyup', checkForm)
	input.addEventListener('blur', checkForm)
}) 

signInForm.addEventListener('submit',(e)=>{
	e.preventDefault()
	
	 if(camposLog.user && camposLog.password){
		 signInForm.submit(); 
		 signInForm.reset()
		 
		 document.querySelectorAll('.valueCorrect').forEach((icono)=>{
		 icono.classList.remove('valueCorrect')
		 }) 
	 }else{
		
	 }
}) 

signUpForm.addEventListener('submit',(e)=>{
	 e.preventDefault()
	
	 if(camposReg.user_reg && camposReg.email_reg && camposReg.password_reg){
		 signUpForm.submit();
		 signUpForm.reset()
		 
		 document.querySelectorAll('.valueCorrect').forEach((icono)=>{
			 icono.classList.remove('valueCorrect')
		 }) 
	 }else{
		
	 }
})


 







 




