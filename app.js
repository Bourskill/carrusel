var elem = document.querySelector('.carousel');
var flkty = new Flickity(elem, {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  autoPlay: 4000,
  fade: true,
  lazyLoad: true,
  adaptiveHeight: true,
  on: {
    ready: function() {
      // Actualizar la opacidad de las imágenes al iniciar el carrusel
      updateOpacity();
    },
    scroll: function() {
      // Actualizar la opacidad de las imágenes al desplazarse
      updateOpacity();
    }
  }
});


function updateOpacity() {
    if (cells) {
      cells.forEach(function (cell) {
        var cellRect = cell.element.getBoundingClientRect();
        var isVisible = cellRect.right > 0 && cellRect.left < window.innerWidth;
        var opacity = isVisible ? 1 : 0;
        cell.element.style.opacity = opacity;
      });
    }
  }
  
  
  
