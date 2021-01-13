const express = require('express');

const app = express();

const request = require('request');

const hbs = require('hbs');

const async = require('async');

require('./hbs/helpers')


app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/parciales');

app.use(express.static(__dirname + '/public'));









const port =process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/inicio', function (req, res) {
    res.render('inicio');
});

app.get('/registro', function (req, res) {
    res.render('seleccion');
  });


app.listen(port,()=>{
    console.log(`escuchando por el puerto ${port}`)
})

