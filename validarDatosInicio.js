document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert(" Por favor debe completar los campos vacios, inténte nuevamente.");
  } else {
    window.location.href = "./index.html";
  }
});

const validateForm = () => {
  let isValid = true;
  isValid =
    validateEmailField("email", "El correo electrónico no es válido") &&
    isValid; // Validar campo de email
  isValid =
    validateField("password", "La contraseña es obligatoria") && isValid; // Validar campo de contraseña
  return isValid;
};
