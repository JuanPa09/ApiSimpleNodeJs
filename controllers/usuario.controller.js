const { json } = require("body-parser");
const sql = require("../config/mysqlConnection");


exports.raiz = async(req,res)=>{
    res.send('Raiz de usuario')
}

exports.saludar = async(req,res) => {
    res.send('Hola');
}

exports.getUsuarios = async(req,res) =>{
    sql.query("Select * from Usuario",(err,result)=>{
        if(!err){
            res.send(result);
        }else{
            res.send("Ocurrio un error:" , err)
        }
    })
}

/* POST */
exports.registrarUsuario = async(req,res) => {
    const {
        correo,
        usuario,
        password,
        id_estado
        } = req.body
        
        
        sql.query(`Insert into Usuario(correo,usuario,password,id_estado) values('${correo}','${usuario}','${password}',${id_estado});`,(err,result)=>{
            if(!err){
                res.json({exito:1})
                console.log(`Usuario: ${usuario} registrado con exito`)
            }else{
                console.log(err)
                res.json({exito:0})
            }
        })
}

exports.login = async(req,res) => {
    const {
        usuario,
        password
    } = req.body

    sql.query(`Select id_usuario from Usuario where usuario = '${usuario}' and password = '${password}'`,function(err,result){
        if(!err){
            if(result.length != 0){
                res.json({id: result[0].id_usuario})
            }else{
                res.json({id:-1})
            }
        }else{
            res.json({id:-1})
        }
    })
}

exports.actualizarUsuario = async(req,res) => {
    
    /*const {
        id_usuario,
        correo,
        usuario,
        password,
        id_estado
        } = req.body

    sql.query(`Update Usuario Set correo = ${correo}, usuario = ${usuario}, password = ${password}, id_estado = ${id_estado}
            Where id_usuario = ${id_usuario};`,(err,result)=>{
                if(!error){
                    res.json({exito: 1})
                }else{
                    res.json({exito: 0, error: err})
                }
            })*/
}

exports.eliminarUsuario = async(req,res) => {
    
}


/*exports.prueba = async(req,res) =>{
    sql.query("Select * from info",(err,data)=>{
        if(err){
            console.log("Ocurrio un error")
        }
        console.log(data)
        res.send(data)
    })
}

exports.getUsuarios = async(req,res) => {
    sql.query("Select * from Usuario",(err,res)=>{
        
    })
}*/
