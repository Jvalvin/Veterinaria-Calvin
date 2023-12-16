document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos el elemento del menú principal
    var menuPrincipal = document.getElementById("menu-principal");
  
    // Agregamos un evento de clic al menú principal
    menuPrincipal.addEventListener("click", function (event) {
      // Evitamos el comportamiento predeterminado de los enlaces
      event.preventDefault();
  
      // Verificamos si el clic fue en un enlace del menú
      if (event.target.tagName === "A") {
        // Obtenemos el texto del enlace clicado
        var seccion = event.target.textContent.toLowerCase();
  
        // Llamamos a la función para mostrar el contenido correspondiente
        mostrarContenido(seccion);
      }
    });
      
    // Función para mostrar el contenido según la sección
    function mostrarContenido(seccion) {
      // Puedes personalizar esta función según tus necesidades
      var contenido = document.getElementById("contenido");
  
      switch (seccion) {
        case "inicio":
          contenido.innerHTML = "<h2>Bienvenido a la página de inicio</h2>";
          break;
        case "productos":
          contenido.innerHTML = "<h2>Nuestros productos</h2><p>Aquí se muestran los productos.</p>";
          break;
        case "servicios":
          contenido.innerHTML = "<h2>Nuestros servicios</h2><p>Aquí se describen nuestros servicios.</p>";
          break;
        case "contacto":
          contenido.innerHTML = "<h2>Información de contacto</h2><p>Puedes contactarnos en info@example.com</p>";
          break;
        default:
          contenido.innerHTML = "";
      }
    }
  });
  
  // scripts.js

// JavaScript para mostrar/ocultar la descripción al hacer clic en "Ver más"
document.getElementById('verMasBtn').addEventListener('click', function () {
  var descripcion = document.getElementById('descripcionVeterinaria');
  descripcion.style.display = (descripcion.style.display === 'none' || descripcion.style.display === '') ? 'block' : 'none';
});
