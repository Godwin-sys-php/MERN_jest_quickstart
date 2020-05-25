//import * as base from './baseDeDonnee.jsx'
//import mapTest from './schemas/mapTest.jsx'
import jquery from 'jquery'

class DbMaps
{
	constructor(rdb,rtable){
		this._db=rdb;
		this._table=this._db.collection(rtable);
	}
	
	getUsers () {
	  return new Promise((resolve, reject) => {
		 this._table.find().toArray( function(err, docs) {
		  if (err) {
			// Reject the Promise with an error
			return reject(err);
		  }

		  // Resolve (or fulfill) the promise with data
		  return resolve(docs);
		});
	  });
	}
	
	get All()
	{
		return this.getUsers();
	}
	
	getOneUser(usr)
	{
		console.log(usr);
		 this._table.findOne(usr, (err, result) => {
			if (err) throw err;
			console.log(result.mail);
			return true;
		  });
	}
	
	set newObject(myobj)
	{
		this._table.insertOne(myobj, (err, res) => {
			if (err) throw err;
			console.log("1 document inserted");
		});
	}
}

export default DbMaps;