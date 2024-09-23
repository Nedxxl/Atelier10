var express = require('express');
var app = express();
var cntClient = 0;
var now = new Date();
var annee = now.getFullYear();
var mois = now.getMonth();
var jour = now.getDate();
var heure = now.getHours();
var minute = now.getMinutes();
var seconde = now.getSeconds();
app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
    res.render('pages/index',{ annee: annee, mois: mois, jour: jour, heure: heure, minute: minute, seconde: seconde });
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

var server = app.listen(8080);
var io = require('socket.io') (server);

io.sockets.on('connection', function(socket) {
    cntClient++;
    
app.set('view engine', 'ejs');
    console.log('Un client est connecté');
    socket.emit('message', 'Vous êtes le ' + cntClient + 'ème client');
    });
