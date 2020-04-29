const express = require('express');
const router =express.Router();
const tareaController = require('../controllers/tareaController');
const auth =require('../middleware/authentication');
const {check} =require('express-validator');


//crear una tarea
// api/tareas

router.post('/',
auth,
[
    check('nombre','el nombre es obligatorio').not().isEmpty(),
    check('proyecto','el proyecto es obligatorio').not().isEmpty()
],

    tareaController.crearTarea
);

//oberner las tareas por proyecto

router.get('/',
    
   auth,

    tareaController.obtenerTareas
);

//Actualizar tareas
router.put('/:id',
    auth,


    tareaController.actualizarTarea
)


//eliminar tarae
router.delete('/:id',
    auth,


    tareaController.eliminarTarea
)

module.exports = router;