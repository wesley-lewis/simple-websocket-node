var WebSocketServer = require('ws').Server;
let wss = new WebSocketServer({port: 8181})

wss.on('connection', function(ws) {
	console.log('Client connected');
	ws.on('message', function(message) {
		console.log(message.toString());
	});
});
