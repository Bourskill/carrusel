// mover todo el código de inicialización del carrusel fuera de la función window.onload
var flickity  = new Flickity('.carousel', {
    // opciones generales
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: 4000, // cambia de imagen cada 4 segundos
    pauseAutoPlayOnHover: true, // detiene el cambio de imagen cuando el mouse está encima del carrusel
    fade: true,
    adaptiveHeight: true,
    lazyLoad: true,
    setGallerySize: false,
    opacity: true
  });
  

  
 
// Actualizar la opacidad de las imágenes en función de su posición en el carrusel
flickity.on('scroll', function() {
    flickity.slides.forEach(function(slide, i) {
      var image = slide.cells[0].element.querySelector('img');
      var imageWidth = image.offsetWidth;
      var slideWidth = flickity.slidesWidth;
      var slidePosition = slide.target + flickity.x;
      var opacity = 1 - Math.abs(slidePosition) / (slideWidth / 2);
      opacity = Math.max(0, opacity);
      opacity = Math.min(1, opacity);
      image.style.opacity = opacity;
    });
  });
  
  

  function handleCarousel() {
    const images = document.querySelectorAll('.carousel img');

    images.forEach(img => {
        const boundingRect = img.getBoundingClientRect();
        const percentVisible = boundingRect.x / window.innerWidth;

        img.style.opacity = 1 - percentVisible;
    });
}

  
  
  

  
  // reinicia el cambio de imagen cuando se termina de interactuar con el carrusel
  flickity.on('dragEnd', function () {
    flickity.playPlayer();
  });
  