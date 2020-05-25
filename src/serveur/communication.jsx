import React from 'react'
import DefinitionCoordonnees from './definitionCoordonnees.jsx'

class Communication extends React.Component
{
	constructor(props){
		super(props);
		this.coordonnees={x:1,y:2,z:3};
	}
	envoyerDonnees(){
		let a=new DefinitionCoordonnees();
		console.log(a.objCoord());
		return JSON.stringify({a:1});
	}
	
	textifyJSON(Donnees){
		return JSON.stringify(Donnees);
	}
	
	render(){
		return(
			<span>{this.envoyerDonnees()}</span>
		);
	}
}


/*import Http from 'http'
import Fs from 'fs'

class Communication
{
	constructor()
	{
		this.server = http.createServer(function(req, res) {
    		fs.readFile('./index.html', 'utf-8', function(error, content) {
        		res.writeHead(200, {"Content-Type": "text/html"});
        		res.end(content);
    		});
		});
	}
}
*/
export default Communication;


