<?php
session_start(); //iniciar sesion con php

/**Algo de explicación: 
 * Estructura:
    - html: crea el formulario, cuando se le da al botón el .js está "escuchando" y 
    se encarga de validar los datos rollo formato y tal, cosas q hemos definido al crear la bd.
    - php: una vez validados los datos, se envían al php, que se encarga de comprobar si ya existe
    el usuario en la bd y si no existe, lo crea.
    + name del input (html) y el índice de $_POST (php) deben coincidir 
    + primero debe ir la parte de php y luego la de html porq la primera línea debe ser <?php sesion_start
    
index.php --> register.php :
               -php 
               -html (formulario) ---> js
*/


?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>SafeFilms</title>
</head>
<body>
  <h1>Bienvenido/a! Puedes registrarte : </h1>
  <button onclick="window.location.href='register.php'">Registrarse</button>
</body>
</html>

