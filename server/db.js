// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Cambia esto según tu configuración
  password: 'gato@muricy26x', // Cambia esto según tu configuración
  database: 'ionic_proyecto'
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos: ', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

module.exports = connection;
