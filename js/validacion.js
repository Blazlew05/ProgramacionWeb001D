document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");
  const errorMsg = document.getElementById("error-msg");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombreCompleto = document.getElementById("nombre_completo").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const rut = document.getElementById("rut").value.trim();

    if (nombreCompleto === "" || email === "" || password === "" || direccion === "" || rut === "") {
      errorMsg.textContent = "Por favor, completa todos los campos.";
      return false;
    } else {
      errorMsg.textContent = "";
    }

    if (!validateEmail(email)) {
      errorMsg.textContent = "Por favor, introduce un correo electrónico válido.";
      return false;
    } else {
      errorMsg.textContent = "";
    }

    if (password.length < 8) {
      errorMsg.textContent = "La contraseña debe contener al menos 8 caracteres.";
      return false;
    } else {
      errorMsg.textContent = "";
    }

    if (direccion.length < 10) {
      errorMsg.textContent = "La dirección debe contener al menos 10 caracteres.";
      return false;
    } else {
      errorMsg.textContent = "";
    }

    if (rut.length !== 10 || isNaN(rut)) {
      errorMsg.textContent = "El RUT debe contener 10 números.";
      return false;
    } else {
      errorMsg.textContent = "";
    }

    alert("Formulario enviado correctamente.");
    formulario.reset();
  });
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
