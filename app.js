const carousel = document.querySelector('.carousel');

var flkty = new Flickity(carousel, {
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



carousel.addEventListener('scroll', () => {
    flkty.slides.forEach((slide, i) => {
        const image = carousel.querySelector(`[data-index="${i}"] img`);
        const x = (slide.target + flkty.x) * -1;
        let percent = Math.max(0, Math.min(1, (x + slide.width) / (flkty.viewport.offsetWidth + slide.width)));
        image.style.opacity = percent;
    });
});