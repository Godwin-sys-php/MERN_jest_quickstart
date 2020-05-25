import React from 'react';
import ReactDOM from 'react-dom';
import LoginMenu from './LoginMenu.jsx'
import RegisterForm from './RegisterForm.jsx'
import './assets/CSS/buttonStyle.css'


const welcome = () => {
	const [showLogin, setShowLogin] = React.useState(false);
	
	const onClick = () => setShowLogin(!showLogin)
	
	return(
		<div id={"main"}>
			{showLogin?<LoginMenu onClick={onClick} />:null}
			<RegisterForm />
			<button id={"beautifulButton"} onClick={onClick}>{"Show login"}</button>
		</div>
	)
}

export default welcome

