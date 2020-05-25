/*import React from 'react'
import DbMaps from './dbMaps.jsx'
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
}*/


/*import Http from 'http'
import Fs from 'fs'*/

/*class Communication
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

import DbMaps from './dbMaps.jsx'

class Communication
{
	constructor(rid,rmap,rx,ry,rz)
	{
		this._id=rid;
		this._map=rmap;
		this._coords={_x:rx,_y:ry,_z:rz};
	}
	
	set id(rid)
	{
		this._id=rid;
	}
	
	get id()
	{
		return this._id;
	}
}

export default Communication;