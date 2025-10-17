// Validación de cliente
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register_form");
  let numbien = false;
  let letrabien = false;
  if (!form) return;

  const msg = document.createElement("p");
  msg.style.color = "red";
  form.appendChild(msg);

  function error(t) { msg.textContent = t; }
  function emailOk(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

  form.addEventListener("submit", (e) => {
    msg.textContent = "";

    const nombre   = form.nombre.value.trim();
    const apellido = form.apellido.value.trim();
    const numDni   = form.numDni.value.trim();
    const letra    = form.letraDni.value.trim().toUpperCase();
    const tlfn     = form.tlfn.value.trim();
    const fecha    = form.fNacimiento.value;
    const email    = form.email.value.trim();
    const usuario  = form.usuario.value.trim();
    const contrasena = form.contrasena.value.trim();

    if (nombre.length < 2 || !/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombre)) {
      e.preventDefault(); return error("Nombre inválido.");
    }
    if (apellido.length < 2 || !/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(apellido)) {
      e.preventDefault(); return error("Apellido inválido.");
    }

    if (!/^\d{8}$/.test(numDni)) {
      e.preventDefault(); return error("El DNI debe tener 8 dígitos.");
    }
    else{numbien=true;}

    if (!/^[A-Z]$/.test(letra) ) {
      e.preventDefault(); return error("La letra del DNI debe ser una letra.");
    }
    else{letrabien=true;}

    if (!/^\d{9}$/.test(tlfn)) {
      e.preventDefault(); return error("El teléfono debe tener 9 dígitos.");
    }
    if (!fecha) {
      e.preventDefault(); return error("Selecciona una fecha de nacimiento válida.");
    }
    if (!emailOk(email)) {
      e.preventDefault(); return error("Email no válido.");
    }
    if (usuario.length < 3) {
      e.preventDefault(); return error("El nombre de usuario debe tener 3 caracteres o más");
    }
    if (contrasena.length < 4) {
      e.preventDefault(); return error("La contraseña debe ser más larga");
    }

    //Comprobar que la letra del DNI corresponde al numero
    if(letrabien && numbien)
    {
      const numero = parseInt(numDni, 10);
      const resto = numero % 23;
      const dniletras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
      if(letra != dniletras[resto])
      {
        e.preventDefault(); return error("La letra del DNI debe ser una letra correspondiente al numero");
      }

    }

  });
});