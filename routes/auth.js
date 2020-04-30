//rutas para autenticar usuarios

const express = require('express');
const router = express.Router();

const authController =require('../controllers/authController');
const auth =require('../middleware/authentication');

//Crear un usuario
// api/auth
router.post('/', 

authController.autenticarUsuario
);

router.get('/',
auth,
authController.usuarioAutenticado
)

module.exports = router;