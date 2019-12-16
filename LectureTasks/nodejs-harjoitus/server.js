var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var qHref = q.href;

    res.writeHead(200,{'Content-Type': 'text/plain; charset=utf8'});
    res.write('Palvelin vastaa!, url:iin lisätty ' + qHref + '\n');
    res.end();
}).listen(3000, 'localhost');

console.log('Palvelin odottaa pyyntöäasi osoitteessa http://localhost:3000\nLisää urlinn /joku');
