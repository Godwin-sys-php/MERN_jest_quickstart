import express from 'express';
import path from 'path';
import open from 'open';
import config from '../webpack.config.dev';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import DbMaps from '../api/dbMaps.jsx'
var MongoClient = require("mongodb").MongoClient;


const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/public/index.html'));
});

MongoClient.connect("mongodb://localhost:27017", (error, client) => {
    if (error) return error;
	
	let db = client.db('MERN_jest_quickstart');

    console.log("Connecté à la base de données MERN_jest_quickstart ");
	
	let c=new DbMaps(db,'users');
	
	app.post('/register', (req, res) => {
		c.newObject = req.body;
	});
	
	app.post('/login', (req, res) => {
		res.send(c.getOneUser(req.body));
	});

	app.get('/users',  (req, res) => {
		c.All.then((value)=>{res.send(value);});
	});
	
	//client.close(); a mettre quelque part
	
});

app.listen(port,(error) => {
    if(error) {
        console.log(error);
    } else {
        open(`http://localhost:${port}`)
    }
});
