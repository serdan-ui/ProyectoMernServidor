const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult }= require('express-validator');
const jwt = require('jsonwebtoken');

exports.crearUsuario = async (req, res) =>{

    //Revisar si hay errores 
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() });
    }

    //extraer email y password
const {email , password } = req.body;

    try{
        let usuario = await Usuario.findOne({ email });

        if(usuario) {
            return res.status(400).json({ msg : 'el usuario ya existe'})
        }
        
        //Crear  el usuario nuevo
        usuario = new Usuario(req.body);


        //Hashear un password
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password , salt);

        //guarda el nuevo usuario
      await  usuario.save();

      //Crear y firmar el jwt 
      const payload ={
        usuario: {
            id: usuario.id
        }

      };

      //firmar el jwt
      jwt.sign(payload, process.env.SECRETA,{
          expiresIn: 3600
      }, (error, token) => {
        if(error) throw error;

        //mensaje de confirmacion
        res.json({token});
      });
      
    }catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
} 