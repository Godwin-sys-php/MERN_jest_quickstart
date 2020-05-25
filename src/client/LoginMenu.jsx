import React from 'react';
import ReactDOM from 'react-dom';
import './assets/CSS/LoginMenu.css'

class loginMenu extends React.Component {
	constructor(props)
	{
		super(props);
		this._mail="";
		this._pwd="";
		this._formu={};
		this._onSubmit = this._onSubmit.bind(this);
		this.state = {
		  error: null,
		  isLoaded: false,
		  items: []
		};
	}
	_onSubmit(e)
	{
		e.preventDefault();
		let formular = JSON.stringify({"mail":this._mail.value,"pwd":this._pwd.value});
		fetch("http://localhost:3000/login", {
		  method: "POST",
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body: formular
		});
	}
    render(){
        return(
			<div id={"LoginContainer"}>
				<p onClick={this.props.onClick}>x</p>
				<form id={"LoginForm"} ref={(formu) => this._form = formu}>
					<h2>{"Login"}</h2>
					<input type={"text"} ref={(mail) => this._mail = mail} name="mail" placeholder={"mail"}/><br />
					<input type={"password"} ref={(pwd) => this._pwd = pwd} name="password" placeholder={"password"} /><br />
					<input type={"submit"} onClick={this._onSubmit} value={"Log in"} />
				</form>
			</div>
        )
    }
}

export default loginMenu