import mongoose from '../baseDeDonnee.jsx'

let Schema = mongoose.Schema;

let _userSchema = new Schema({
	_id: Number,
	mail : String,
	pwd : String
});

let mapTest = mongoose.model('mapTest',_userSchema);

export default mapTest;