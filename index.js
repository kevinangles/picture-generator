var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.post('/generate', (req, res) => {
	const filename = req.body.filename;
	const imageStyle = req.body.imageStyle;
	const message = req.body.message;
	const font = req.body.font;
	const fontSize = req.body.fontSize;

	const spawn = require("child_process").spawn;
	const process = spawn('python', ["./pic.py", filename, imageStyle, message, font, fontSize]);

	// Takes stdout data from script which executed 
	// with arguments and send this data to res object 
	process.stdout.on('data', (data) => {
		res.send(data.toString());
	})
});

app.listen(3000, () => {
	console.log('server running on port 3000');
});
