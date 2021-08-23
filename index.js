var express = require('express');
var mysql = require('mysql');

port = 3000;

var app = express();

app.use(express.json()); //Para parsear las peticiones entrantes
app.use(express.urlencoded({extended: true})); //Para que permita anidar informacion en las rutas
app.use(express.static('public')) //Para permitir devolver imagenes 


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

/* #################### API ################################### */


const usuarioRouter = require('./routes/usuario.route')
app.use("/usuario",usuarioRouter)

const reservaRouter = require('./routes/reserva.route')
app.use('/reserva',reservaRouter)





app.listen(port,function(){
    console.log("Corriendo en el puerto " + port)
})
