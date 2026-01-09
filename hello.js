// hello.js — versión ejecutable en navegador
// Función principal: muestra un saludo en la consola
function main() {
  // Además de la consola, mostrar la escena dentro de la página
  renderHelloScene();
  console.log("¡Hola! Bienvenido al proyecto.");
}

/**
 * Renderiza una "escena" de saludo dentro de la página.
 * Crea un overlay y un panel con mensaje y botón de cerrar.
 * @param {Object} opts Opciones { containerId, title, message }
 */
function renderHelloScene(opts = {}) {
  const { containerId = 'hello-scene', title = 'Saludo', message = '¡Hola! Bienvenido al proyecto.' } = opts;

  // Si ya existe la escena, reutilizarla
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement('div');
    container.id = containerId;
    container.className = 'hello-scene';
    document.body.appendChild(container);
  }

  // Construir contenido
  container.innerHTML = `
    <div class="hello-overlay" role="dialog" aria-modal="true">
      <div class="hello-panel">
        <button class="hello-close" aria-label="Cerrar">✕</button>
        <h3 class="hello-title">${title}</h3>
        <p class="hello-message">${message}</p>
      </div>
    </div>
  `;

  // Añadir comportamiento de cierre
  const closeBtn = container.querySelector('.hello-close');
  const overlay = container.querySelector('.hello-overlay');
  const removeScene = () => { container.innerHTML = ''; };

  closeBtn?.addEventListener('click', removeScene);
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) removeScene();
  });
}

// Exponer la función en el objeto global para poder llamarla desde la página
window.helloMain = main;

// Nota: la interfaz permite llamar `renderHelloScene({ title, message })` si quieres personalizar
