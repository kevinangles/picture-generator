let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();

app.use(cors());

app.use(bodyParser.json());

app.post('/generate', (req, res) => {
	console.log(req.body);
	const picture = req.body.picture;
	const style = req.body.style;
	const message = req.body.message;
	const font = req.body.font;
	const size = req.body.size;

	console.log(picture);
	console.log(style);
	console.log(message);
	console.log(font);
	console.log(size);

	const spawn = require("child_process").spawn;
	const process = spawn('python', ["./pic.py", picture, style, message, font, size]);

	// Takes stdout data from script which executed 
	// with arguments and send this data to res object 
	process.stdout.on('data', (data) => {
		console.log('Came back from python file');
		res.send(data.toString());
	})
});

app.listen(3000, () => {
	console.log('server running on port 3000');
});
