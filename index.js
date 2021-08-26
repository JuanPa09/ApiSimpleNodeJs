var express = require('express');
//var mysql = require('mysql');
const cors = require('cors')
//var fs = require('fs')

/* Probando hacer HTTPS */
/*var https = require('https')
var privateKey = fs.readFileSync('./key.pem','utf8');
var certificate = fs.readFileSync('./cert.pem')
var credentials = {key:privateKey, cert: certificate};*/
/* */

port = 3000;

var app = express();

//middlewares
app.use(express.json()); //Para parsear las peticiones entrantes
app.use(express.urlencoded({extended: true})); //Para que permita anidar informacion en las rutas
app.use(express.static('public')) //Para permitir devolver imagenes 
app.use(cors())

/* ############## Ejemplos ################# */

app.get('/',(req,res)=>{
    res.status(200).send(`Se accedio correctamente al puerto ${port}`);
})

app.get('/hola',(req,res)=>{
    console.log(req.query.id)
    res.send(`Hola Mundo!, el id es ${req.query.id} y el nombre es ${req.query.nombre}`)
})

app.get("/adios",(req,res)=>{
    id,nombre = req.query
    res.send(`Adios ${nombre} con id ${id}`)
})

app.get("/json",(req,res)=>{
    retorno = {
        id:1,
        nombre: 'Jose'
    }
    res.send(retorno)
})

app.get('/datos',(req,res)=>{
    console.log(req.body)
    res.send('Enviados')
})

app.post('/datos',(req,res)=>{
    console.log(req.body)
    res.send('Enviados')
})

app.put('/actualizacion/:id/:nombre',(req,res)=>{
    console.log(req.params.id)
    console.log(req.params.nombre)
    res.send('datos')
})

app.put('/actualizacion',(req,res)=>{
    console.log(req.query.id)
    console.log(req.query.nombre)
    res.send('datos')
})

/* #################### API ################################### */

const usuarioRouter = require('./routes/usuario.route')
app.use("/usuario",usuarioRouter)

const reservaRouter = require('./routes/reserva.route')
app.use('/reserva',reservaRouter)

app.listen(port,function(){
    console.log("Corriendo en el puerto " + port)
})


/* Probando HTTPS */
/*var httpsServer = https.createServer(credentials, app);
httpsServer.listen(port);*/