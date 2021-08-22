var express = require('express');
port = 3000;

var app = express();

app.use(express.json()); //Para parsear las peticiones entrantes
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))


app.get('/',(req,res)=>{
    res.send(`Se accedio correctamente al puerto ${port}`);
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

app.listen(port,function(){
    console.log("Corriendo en el puerto " + port)
})
