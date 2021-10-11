import express from 'express';
import morgan  from 'morgan';
import cors    from 'cors';
import path    from 'path';

//const express = require('express');
//const morgan = require('morgan');
//const cors = require('cors');
//const path = require('path');



const app = express();

// Conexión base de datos

const mongoose = require('mongoose');
//const uri = 'mongodb://localhost:27017/prueba';
const uri = 'mongodb+srv://petnet:apolo&2022@cluster0.7k80p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


const options = {useNewUrlParser: true, useUnifiedTopology: true};


mongoose.connect(uri, options).then(
 () => { console.log('Conectado a DB') },
 err => { console.log(err)}
);

//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', require('./routes/nota'));

//Rutas
//app.get('/', (req, res) => {
//    res.send('Hello World!');
//});




// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () =>{

    console.log("Escuchando el puerto"+app.get('puerto'))

});

//Puerto 
//app.listen(3000, function(){

//    console.log("Ya tengo un servidor en el puerto 3000");

//});

