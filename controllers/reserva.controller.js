
const sql = require("../config/mysqlConnection");

exports.obtenerReservas = async(req,res) =>{
    sql.query(`Select * from Reserva;`,(err,result)=>{

        if(err){
            return res.status(400).json({error:err})
        }else{
            return res.status(200).send(result)
        }

    })
}

exports.obtenerDetalleReservas = async(req,res)=>{
    sql.query(`Select * from Detalle_Reserva;`,(err,result)=>{
        if(err){
            return res.status(400).json({error:err})
        }else{
            return res.status(200).send(result)
        }
    })
}

exports.reservar = async(req,res)=>{
    const {
        id_usuario,
        fecha,
        hora
    } = req.body

    sql.query(`Insert Into Reserva(fecha,hora) Values('${fecha}', '${hora}');`,(err1,resultReserva)=>{
        if(err1)
            return res.status(400).json({error:err1});
        
        sql.query(`Insert Into Detalle_Reserva values(${id_usuario}, ${resultReserva.insertId})`,(err2,resultDetalleReserva)=>{
            if(err2){
                sql.query(`Delete from Reserva Where id_reserva = ${resultReserva.insertId}`,(err3,result)=>{
                    if(err3){
                        res.status(400).json({error:err3})
                    }else{
                        res.status(400).json({error: err2})
                    }
                })
            }else{
                res.status(200).json(resultDetalleReserva)
            }
        })
    })

}

