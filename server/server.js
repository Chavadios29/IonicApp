const express = require('express');
const db = require('./db'); // Conexión a la base de datos
const cors = require('cors'); // Para permitir peticiones desde tu app Ionic
const bcrypt = require('bcrypt'); // Librería para cifrar contraseñas

const app = express();
const port = 3001; // Usa el puerto adecuado para tu servidor

// Middleware
app.use(express.json()); // Parsear JSON en el cuerpo de las solicitudes
app.use(cors()); // Permitir solicitudes desde tu aplicación cliente

/** 
 * Ruta para registrar un nuevo usuario
 */
app.post('/auth/register', (req, res) => {
  const { name, username, email, age, password, profile_img_url } = req.body;

  console.log('Datos recibidos para registro:', req.body);

  if (!name || !username || !email || !age || !password) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  const checkUserQuery = 'SELECT id FROM users WHERE username = ? OR email = ?';
  db.query(checkUserQuery, [username, email], (err, results) => {
    if (err) {
      console.error('Error al verificar el usuario:', err);
      return res.status(500).json({ message: 'Error del servidor' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'El usuario o correo ya existe' });
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error('Error al cifrar la contraseña:', err);
        return res.status(500).json({ message: 'Error al cifrar la contraseña' });
      }

      const insertUserQuery = 
        'INSERT INTO users (name, username, email, age, password, profile_img_url) VALUES (?, ?, ?, ?, ?, ?)';
      db.query(insertUserQuery, [name, username, email, age, hashedPassword, profile_img_url || null], (err, results) => {
        if (err) {
          console.error('Error al registrar usuario:', err);
          return res.status(500).json({ message: 'Error al registrar el usuario' });
        }

        res.status(201).json({ message: 'Usuario registrado con éxito', userId: results.insertId });
      });
    });
  });
});

/**
 * Ruta para iniciar sesión
 */
app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;

  console.log('Datos recibidos para login:', req.body); 
  
  if (!username || !password) {
    return res.status(400).json({ message: 'Usuario y contraseña son requeridos' });
  }

  const query = 'SELECT id, username, password, profile_img_url FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error('Error al verificar el usuario:', err);
      return res.status(500).json({ message: 'Error del servidor' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos' });
    }

    bcrypt.compare(password, results[0].password, (err, isMatch) => {
      if (err) {
        console.error('Error al verificar la contraseña:', err);
        return res.status(500).json({ message: 'Error del servidor' });
      }

      if (!isMatch) {
        return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos' });
      }

      res.status(200).json({ 
        message: 'Login exitoso', 
        userId: results[0].id, 
        username: results[0].username, 
        profile_img_url: results[0].profile_img_url 
      });
    });
  });
});

/**
 * Ruta para obtener todos los usuarios
 */
app.get('/users', (req, res) => {
  const query = 'SELECT id, name, username, email, age, profile_img_url FROM users';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener usuarios:', err);
      return res.status(500).json({ message: 'Error al obtener los usuarios' });
    }

    res.status(200).json(results);
  });
});

/**
 * Ruta para actualizar la imagen de perfil de un usuario
 */
app.put('/users/:id/profile', (req, res) => {
  const { id } = req.params;
  const { profile_img_url } = req.body;

  if (!profile_img_url) {
    return res.status(400).json({ message: 'La URL de la imagen de perfil es requerida' });
  }

  const updateQuery = 'UPDATE users SET profile_img_url = ? WHERE id = ?';
  db.query(updateQuery, [profile_img_url, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar la imagen de perfil:', err);
      return res.status(500).json({ message: 'Error al actualizar la imagen de perfil' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Imagen de perfil actualizada con éxito' });
  });
});

/**
 * Inicia el servidor
 */
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
