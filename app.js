
var flkty = new Flickity('.carousel', {
    // opciones generales
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: 4000, // cambia de imagen cada 4 segundos
    pauseAutoPlayOnHover: true, // detiene el cambio de imagen cuando el mouse está encima del carrusel
});

// reinicia el cambio de imagen cuando se termina de interactuar con el carrusel
flkty.on('dragEnd', function () {
    flkty.playPlayer();
});


