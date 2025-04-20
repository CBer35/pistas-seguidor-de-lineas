// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

  // --- Animación del Robot al hacer Scroll ---
  const robotContainer = document.querySelector('.robot-container');
  const scrollThreshold = 500; // Cantidad de scroll hacia abajo para que aparezca el robot (en píxeles)

  // Función que maneja el evento de scroll
  function handleScroll() {
      // window.scrollY es la cantidad de scroll desde la parte superior de la página
      if (window.scrollY > scrollThreshold) {
          // Si se ha scrolleado más allá del umbral, muestra el robot
          robotContainer.classList.add('visible');
      } else {
          // Si se scrollea de vuelta hacia arriba, oculta el robot
          robotContainer.classList.remove('visible');
      }
  }

  // Agrega el listener para el evento 'scroll'
  window.addEventListener('scroll', handleScroll);

  // Llama a la función una vez al cargar la página por si el usuario llega con un enlace a una sección inferior
  handleScroll();

  // --- Hover en imágenes de fondo (gestionado por CSS) ---
  // No se necesita JS aquí, se maneja con el pseudo-selector :hover en CSS

  // --- Click en el botón de descarga ("Walmart Style") (gestionado por CSS) ---
  // No se necesita JS aquí, se maneja con el pseudo-selector :active en CSS

  // NOTA: Si la animación de click fuera más compleja (ej: una secuencia),
  // necesitarías un event listener 'click' aquí para añadir/quitar una clase CSS
  // que dispare la animación.

});