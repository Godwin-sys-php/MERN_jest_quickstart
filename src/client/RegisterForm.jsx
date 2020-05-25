import React from 'react';
import ReactDOM from 'react-dom';
import './assets/CSS/registerForm.css'


const registerForm = () => {
	let _mail="";
	let _pwd="";
	
	const _onSubmit = (e) =>
	{
		e.preventDefault();
		/********************************************************
		*					!!!ATTENTION!!! 					*
		*			ne jamais envoyer les mots de passe 		*
		*			en clair utiliser une librairie comme 		*
		*			bcrypt pour ajouter du salt					*
		*					!!!ATTENTION!!!						*
		********************************************************/
		let formular = JSON.stringify({"mail":_mail.value,"pwd":_pwd.value});
		fetch("http://localhost:3000/register", {
		  method: "POST",
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body: formular
		});
	}
	
	return(
		<div id={"register"}>
			<form id={"RegisterForm"} >
				<input type={"text"} ref={(mail) => _mail = mail} name="mail" placeholder={"mail"}/><br />
				<input type={"password"} ref={(pwd) => _pwd = pwd} name="password" placeholder={"password"} /><br />
				<input type={"submit"} onClick={_onSubmit} value={"Register"} />
			</form>
		</div>
	)
}

export default registerForm

