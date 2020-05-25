class DefinitionCoordonnees
{
	constructor(){
		this.x=0;
		this.y=0;
		this.z=0;
	}
	
	objCoord()
	{
		let cX=this.x,cY=this.y,cZ=this.z;
		return {cX,cY,cZ};
	}
	
	static getCoords()
	{
		let dc= new DefinitionCoordonnees();
		return dc.objCoord();
	}
}

export default DefinitionCoordonnees;