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

// Función para actualizar la opacidad de las imágenes
function updateOpacity() {
  var cells = flkty.cells;
  var scrollX = flkty.x;
  cells.forEach(function(cell, i) {
    var cellX = cell.target.getBoundingClientRect().left + scrollX;
    var opacity = 1 - Math.abs(cellX) / window.innerWidth;
    cell.element.style.opacity = opacity;
  });
}
