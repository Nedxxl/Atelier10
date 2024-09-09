var express = require('express');
var app = express();

app.get('/', function(req, res, next) {
    res.send('<h1>Bienvenue dans mon Super Site</h1>');
});

app.get('/contact', function(req, res, next) {
    res.send('<h2> Vous êtes dans la page de contact </h2> <p> Voici nos coordonnées notascam@ruppee.in </p> <a href="/"> Retour à l\'accueil </a>');
});

app.get('/recherche', function(req, res) {
    var mois = req.query.mois;
    var annee = req.query.annee;
    res.send('Silly willy et le weiny magique en: ' + mois + '/' + annee);
});

app.use(function(req, res, next) {
    res.status(404).send('Error 404: Page not found');
});

app.listen(8080);
