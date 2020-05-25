import mongoose from 'mongoose'

const mongoDB = 'mongodb://localhost/MERN_jest_quickstart';

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

export default mongoose;