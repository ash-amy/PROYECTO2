// Capturamos el formulario
const form = document.getElementById("contactoForm");
const mensajeExito = document.getElementById("mensajeExito");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se recargue la página

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const consulta = document.getElementById("consulta").value.trim();

  // Validación simple (solo nombre y correo son obligatorios)
  if(nombre === "" || correo === "") {
    alert("Por favor, completa tu nombre y correo electrónico.");
    return;
  }

  // Simulación de envío
  console.log("Datos enviados:");
  console.log("Nombre:", nombre);
  console.log("Correo:", correo);
  console.log("Teléfono:", telefono || "No proporcionado");
  console.log("Consulta:", consulta || "Sin consulta");

  // Mostrar mensaje de éxito
  mensajeExito.classList.remove("oculto");

  // Limpiar el formulario
  form.reset();
});
