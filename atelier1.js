var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function (req, res) {
    var page = url.parse(req.url, true).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page == '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<h1> Vous etes à l\'accueil, que puis-je pour vous ? </h1>');
    }
    else if (page == '/contact') {
        res.write('<h2> Vous êtes dans la page de contact </h2> <p> Voici nos coordonnées : willyWeiner@hotmom.com </p> <a href="/"> Retour à l\'accueil </a>');
    }
    else if (page == '/recherche' && params.annee && params.mois) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write('Silly willy et le weiny magique en: ' + params.mois + ' ' + params.annee);
    }
    else { res.write('<h1> 404 </h1> <p> La page que vous cherchez n\'existe pas </p>'); }
    res.end();
});
server.listen(8080);