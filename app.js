// mover todo el código de inicialización del carrusel fuera de la función window.onload
var flkty = new Flickity('.carousel', {
    // opciones generales
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: 4000, // cambia de imagen cada 4 segundos
    pauseAutoPlayOnHover: true, // detiene el cambio de imagen cuando el mouse está encima del carrusel
    fade: true,
    adaptiveHeight: true,
    lazyLoad: true,
    setGallerySize: false
  });
  
  flkty.on('scroll', () => {
    const visibleSlide = flkty.getSelectedElement();
    const visibleImage = visibleSlide.querySelector('img');
    if (visibleImage) {
      const visibleHeight = visibleImage.offsetHeight;
      const galleryHeight = flkty.viewportHeight;
  
      const opacity = 1 - (galleryHeight - visibleHeight) / galleryHeight;
      visibleImage.style.opacity = opacity;
    }
  });
  

  
  // reinicia el cambio de imagen cuando se termina de interactuar con el carrusel
  flkty.on('dragEnd', function () {
    flkty.playPlayer();
  });
  