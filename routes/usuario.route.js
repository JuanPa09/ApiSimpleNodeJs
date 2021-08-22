const express = require("express")
const router = express.Router()
const usuarioController = require('../controllers/usuario.controller')

/* ########### Ejemplo ########## */

router.get('/',usuarioController.raiz)
router.get('/getSaludo',usuarioController.saludar)
/* ############# */
router.post('/registro',usuarioController.registrarUsuario)
router.post('/login',usuarioController.login)
router.post('/actualizar',usuarioController.actualizarUsuario)
router.get('/eliminar',usuarioController.eliminarUsuario)

router.get('/prueba',usuarioController.prueba)

module.exports = router
