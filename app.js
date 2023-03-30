var flkty = new Flickity('.carousel', {
    // opciones generales
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: 4000, // cambia de imagen cada 4 segundos
    pauseAutoPlayOnHover: true, // detiene el cambio de imagen cuando el mouse está encima del carrusel
    opacity: 0.5 // Establecer el efecto de opacidad
});

// reinicia el cambio de imagen cuando se termina de interactuar con el carrusel
flkty.on('dragEnd', function () {
    flkty.playPlayer();
});

// Actualizar la opacidad de las imágenes en función de su posición en el carrusel
carousel.on('scroll', function() {
    carousel.slides.forEach(function(slide) {
      var distance = Math.abs(slide.target - carousel.x);
      var opacity = 0.5 + (1 - distance / carousel.width);
      slide.element.style.opacity = opacity;
    });
  });