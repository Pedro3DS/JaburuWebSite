
const scrollContainer = document.querySelector('.horizontal-scroll');

scrollContainer.addEventListener('wheel', function (e) {
e.preventDefault();
scrollContainer.scrollLeft += e.deltaY;
}, { passive: false }); 
