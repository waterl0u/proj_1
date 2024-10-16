$(document).ready(function(){
  $('.image-carousel').slick({
      slidesToShow: 5,    // Minimum number of images visible
      slidesToScroll: 1,   // Scroll one image at a time
      arrows: true,        // Enable navigation arrows
      dots: false,         // Disable dots for cleaner UI
      infinite: true,      // Infinite scrolling
      responsive: [
          {
              breakpoint: 768, // Adjust for smaller screens
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
              }
          }
      ]
  });
});


window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
  
    if (window.scrollY > 50) {
      // Slide the header to the left when scrolling down
      header.style.transform = 'translateX(-100%)';
    } else {
      // Reset the header to its original position when scrolled up
      header.style.transform = 'translateX(0)';
    }
  });