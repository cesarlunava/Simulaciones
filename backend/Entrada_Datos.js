//Llamo al archivo conexio.js
/*require('./conexion');
//Para despues llamar una funcion del mismo
conectar();
//const serie = req.body.serie;
const Nombre = req.body.Nombre;
const ClavedeModelo = req.body.ClavedeModelo;
const email = req.body.email;
const password = req.body.password;
conectar.end();*/


const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json()); // Permite procesar datos en formato JSON

// Configura la conexión a la base de datos de Railway
const connection = mysql.createConnection({
  host: 'autorack.proxy.rlwy.net',
  user: 'root',
  password: 'hqZnvoLyUozaAIyeIfqznWRGZdelYodv',
  database: 'railway'
});

// Ruta para recibir los datos del formulario
app.post('/save-data', (req, res) => {
  const { id, Nombre, ClavedeModelo, password, email} = req.body;

  // Inserta los datos en la base de datos
  connection.query(
    'INSERT INTO contact_form (id, email, ClavedeModelo, password, Nombre) VALUES (?, , )',
    [id, email, ClavedeModelo, password, Nombre],
    (error, results, fields) => {
      if (error) {
        console.error('Error al guardar los datos:', error);
        res.status(500).send('Error al guardar los datos');
      } else {
        res.send('Datos guardados exitosamente');
      }
    }
  );
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});



