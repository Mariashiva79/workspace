
  // Selecciona todas las imágenes
  const images = document.querySelectorAll('.foto');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeButton = document.querySelector('.close');

  // Añade un evento a cada imagen para abrir el modal
  images.forEach(image => {
    image.addEventListener('click', () => {
      const imageUrl = image.getAttribute('data-image'); // Obtiene la URL de la imagen
      modalImage.src = imageUrl;
      modal.style.display = 'flex';
    });
  });

  // Cierra el modal al hacer clic en el botón de cierre
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Cierra el modal al hacer clic fuera de la imagen
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  
