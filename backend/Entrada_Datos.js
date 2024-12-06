//Llamo al archivo conexio.js
require('./conexion');
//Para despues llamar una funcion del mismo
conectar();
//const serie = req.body.serie;
const Nombre = req.body.Nombre;
const ClavedeModelo = req.body.ClavedeModelo;
const email = req.body.email;
const password = req.body.password;

conectar.end();