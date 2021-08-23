const express = require("express")
const router = express.Router()
const usuarioController = require('../controllers/usuario.controller')

/* ########### Ejemplo ########## */

router.get('/',usuarioController.raiz)
router.get('/getSaludo',usuarioController.saludar)

/* ############# */
router.get('/getUsuarios',usuarioController.getUsuarios)
router.post('/registro',usuarioController.registrarUsuario)
router.post('/login',usuarioController.login)
router.put('/actualizar/:id',usuarioController.actualizarUsuario)
router.delete('/eliminar/:id',usuarioController.eliminarUsuario)


/* Prueba */
//router.get('/prueba',usuarioController.prueba)
/* *************************** */
module.exports = router
