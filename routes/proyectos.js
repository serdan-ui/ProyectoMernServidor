const express = require('express');
const router =express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth =require('../middleware/authentication');
const {check} =require('express-validator');



//Crear proyectos
//  api/proyectos

router.post('/',
auth,
[
    check("nombre", 'el nombre del proyecto es obligatorio').not().isEmpty()
],
    proyectoController.crearProyecto
);

//Obtener todos los proyectos
router.get('/',
     auth,
    proyectoController.obtenerProyectos
)

//Actualixar un proyecto via ID
router.put('/:id',
     auth,
     [
        check("nombre", 'el nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.actualizarPoryecto
)


//ELiminar un proyecto
router.delete('/:id',
     auth,
     
    proyectoController.eliminarProyecto
)
module.exports = router;