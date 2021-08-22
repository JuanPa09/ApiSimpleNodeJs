const express = require("express")
const router = express.Router()
const reservaController = require('../controllers/reserva.controller')

router.post('/nuevaReserva',reservaController.reservar)
router.get('/getReservas',reservaController.obtenerReservas)

module.exports = router