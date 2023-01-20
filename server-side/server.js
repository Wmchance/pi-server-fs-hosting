const { readFileSync, writeFileSync } = require('fs');

const express = require('express');
const app = express();


app.get('/', (req, res) => {
	const count = readFileSync('./count.txt', 'utf-8');
	console.log('count:', count);
	
	const newCount = parseInt(count) + 1
	
	writeFileSync('./count.txt', newCount.toString());
	
	res.send(`
		
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>RPi Hosted Webite</title>
		</head>
		<body>
			<h1>I love Tack!!!!</h1>
			<p>She's sooooooo pretty and smart!</p>
			<p>${newCount}
		</body>
		</html>
		
	`);
	
});

app.listen(5000, () => console.log('http://localhost:5000'));
