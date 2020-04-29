const express = require('express');
const conectarDB = require('./config/db');
const cors =require('cors');


//crear el servidor 
const app = express();

//CONECTAR BASE DE DATOS
conectarDB();

//habilitar cors
app.use(cors());

//habilitar express.json es parecido a bodyParser
app.use(express.json({ extended : true}));

//Puerto de la app
const PORT = process.env.PORT || 4000;

//Importar Rutas
app.use('/api/usuarios', require('./routes/usuarios'));

app.use('/api/auth', require('./routes/auth'));

app.use('/api/proyectos', require('./routes/proyectos'));

app.use('/api/tareas', require('./routes/tareas'));




//arrancar la app 
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`)
});

//definir la pagina principal 
app.get('/', (req, res) => {
 
})
