const flkty = new Flickity('.carousel', {
    // opciones generales
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: 4000, // cambia de imagen cada 4 segundos
    pauseAutoPlayOnHover: true, // detiene el cambio de imagen cuando el mouse está encima del carrusel
    lazyLoad: true,
    setGallerySize: false
  });
  
  flkty.on('scroll', () => {
    const visibleIndex = flkty.selectedIndex;
    const cells = flkty.cells;
  
    cells.forEach((cell, index) => {
      const img = cell.element.querySelector('img');
  
      if (index === visibleIndex) {
        img.style.opacity = 1;
      } else {
        const distance = Math.abs(index - visibleIndex);
  
        if (distance <= 1) {
          img.style.opacity = 0.7 + 0.3 * (1 - distance);
        } else {
          img.style.opacity = 0.3;
        }
      }
    });
  });
  