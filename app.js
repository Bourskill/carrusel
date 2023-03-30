const images = document.querySelectorAll('.carousel img');
const containers = document.querySelectorAll('.carousel .container-cell');
const flickity = new Flickity('.carousel', {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  autoPlay: 4000,
  pauseAutoPlayOnHover: true,
  fade: true,
  adaptiveHeight: true,
  lazyLoad: true,
  setGallerySize: false,
  opacity: true
});

function updateImageOpacity() {
  flickity.slides.forEach(function(slide, i) {
    const container = slide.cells[0].element;
    const imageWidth = container.querySelector('img').offsetWidth;
    const slideWidth = flickity.slidesWidth;
    const slidePosition = slide.target + flickity.x;
    const opacity = 1 - Math.abs(slidePosition) / (slideWidth / 2);

    container.style.opacity = Math.max(0, Math.min(1, opacity));
  });
}

function preloadImages() {
  images.forEach(function(image) {
    const src = image.getAttribute('src');
    const imgElement = new Image();
    imgElement.src = src;
  });
}

function updateContainerOpacity() {
  containers.forEach(function(container) {
    const boundingRect = container.getBoundingClientRect();
    const percentVisible = boundingRect.x / window.innerWidth;
    container.style.opacity = 1 - percentVisible;
  });
}

flickity.on('scroll', updateImageOpacity);
flickity.on('dragEnd', function () {
  flickity.playPlayer();
});

window.addEventListener('load', function() {
  preloadImages();
  updateContainerOpacity();
});

window.addEventListener('resize', function() {
  updateContainerOpacity();
});
