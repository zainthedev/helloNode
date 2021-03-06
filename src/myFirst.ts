import http = require('http');
import fs = require('fs');

http
	.createServer(function (req, res) {
		const filename = './' + req.url + '.html';
		fs.readFile(filename, function (err, data) {
			if (err) {
				res.writeHead(404, { 'Content-Type': 'text/html' });
				return res.end('404 Not Found');
			}
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			return res.end();
		});
	})
	.listen(8080);
