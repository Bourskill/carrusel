var carousel = document.querySelector('.carousel');
var flkty = new Flickity('.carousel', {
    // opciones generales
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: 4000, // cambia de imagen cada 3 segundos
    pauseAutoPlayOnHover: true, // detiene el cambio de imagen cuando el mouse está encima del carrusel
    fade: true,
    // Desactivar la transición de opacidad predeterminada de Flickity
    // ya que vamos a manejar la transición nosotros mismos
    setGallerySize: false,
    // Ajustar la opacidad de las imágenes en función de su porcentaje de visibilidad
    on: {
        scroll: function () {
            // Comprobar si Flickity ha inicializado correctamente antes de acceder a sus propiedades
            if (flkty.slides) {
                flkty.slides.forEach(function (slide, i) {
                    var distance = Math.abs(slide.target + flkty.x);
                    var opacity = 1 - distance / flkty.width;
                    slide.target.style.opacity = opacity;
                });
            }
        }
    }

});

// reinicia el cambio de imagen cuando se termina de interactuar con el carrusel
flkty.on('dragEnd', function () {
    flkty.playPlayer();
});