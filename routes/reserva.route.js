const express = require("express")
const router = express.Router()
const reservaController = require('../controllers/reserva.controller')

router.post('/nuevaReserva',reservaController.reservar)
router.get('/getReservas',reservaController.obtenerReservas)
router.get('/getDetalle',reservaController.obtenerDetalleReservas)
router.get('/obtenerReserva',reservaController.obtenerReserva)

module.exports = router