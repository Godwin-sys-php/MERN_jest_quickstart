import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './client/assets/CSS/General.css'
import Welcome from './client/Welcome.jsx'


const App = () => {
	const [showLogin, setShowLogin] = React.useState(false);
	
	const onClick = () => setShowLogin(!showLogin)
	
	return(
		<div id={"app"}>
			<Router>
				<Switch>
					<Route exact path='/' component={Welcome} />
				</Switch>
			</Router>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'));