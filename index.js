var express = require('express');
const cors = require('cors')


port = 3000;

var app = express();

//middlewares
app.use(express.json()); //Para parsear las peticiones entrantes
app.use(express.urlencoded({extended: true})); //Para que permita anidar informacion en las rutas
app.use(express.static('public')) //Para permitir devolver imagenes (poner imagenes en la carpeta public)
//Ejemplo para obtener una imagen -> localhost:3000/nodejs.jpg
app.use(cors())

/* ############## Ejemplos ################# */

/* Ruta Raiz (localhost:3000) */
app.get('/',(req,res)=>{
    res.status(200).send(`Se accedio correctamente al puerto ${port}`);
})

//localhost:3000/hola
app.get('/hola',(req,res)=>{
    console.log(req.query.id)
    res.send(`Hola Mundo!, el id es ${req.query.id} y el nombre es ${req.query.nombre}`)
})
//localhost:3000/adios
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
//Desde postman
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
//Redirecciona a la carpeta usuario.route
const usuarioRouter = require('./routes/usuario.route')
app.use("/usuario",usuarioRouter)
//Redirecciona a la carpeta reserva.route
const reservaRouter = require('./routes/reserva.route')
app.use('/reserva',reservaRouter)

app.listen(port,function(){
    console.log("Corriendo en el puerto " + port)
})
