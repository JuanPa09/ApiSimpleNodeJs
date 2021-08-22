const sql = require("../config/mysqlConnection");


exports.raiz = async(req,res)=>{
    res.send('Raiz de usuario')
}

exports.saludar = async(req,res) => {
    res.send('Hola');
}

exports.registrarUsuario = async(req,res) => {

}

exports.login = async(req,res) => {
    
}

exports.actualizarUsuario = async(req,res) => {
    
}

exports.eliminarUsuario = async(req,res) => {
    
}


exports.prueba = async(req,res) =>{
    sql.query("Select * from info",(err,res)=>{
        if(err){
            console.log("Ocurrio un error")
        }
        console.log(res)
    })
    res.send("Consulta Terminada")
}