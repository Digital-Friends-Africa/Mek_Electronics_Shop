// document access/ event listeners 
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
// END____ document access/ event listeners 

// set index to 0
  let currentIndex = 0;

//   function calls to (show), (navigate - prev and next)item
// ...
// (show) function, 
  function showItem(index) {
    const newTransformValue = -index * 100 + '%';
    carousel.style.transform = 'translateX(' + newTransformValue + ')';
  }
// (next) function, 
  function nextItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showItem(currentIndex);
  }
// (prev) function, 
  function prevItem() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showItem(currentIndex);
  }
// interval/ timing 
  setInterval(nextItem, 5000); // Auto-advanced at every 5 seconds (adjust as needed)

// END of function calls to (show), (navigate - prev and next)item


// navigation buttons
//   document.querySelector('.carousel-container').appendChild(nextButton);
//   document.querySelector('.carousel-container').appendChild(prevButton);
// });
// ``

// document.addEventListener('DOMContentLoaded', function () {
//   const carousel = document.querySelector('.carousel');
//   const carouselItems = document.querySelectorAll('.carousel-item');
//   const nextButton = document.querySelector('.carousel_button_next');
//   const prevButton = document.querySelector('.carousel_button_prev');
//   let currentIndex = 0;

//   function showItem(index) {
//     const newTransformValue = -index * 100 + '%';
//     carousel.style.transform = 'translateX(' + newTransformValue + ')';
//   }

//   function nextItem() {
//     currentIndex = (currentIndex + 1) % carouselItems.length;
//     showItem(currentIndex);
//   }

//   function prevItem() {
//     currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
//     showItem(currentIndex);
//   }

//   setInterval(nextItem, 5000); // Auto-advance every 5 seconds (adjust as needed)

//   // Event listeners for navigation buttons
//   nextButton.addEventListener('click', nextItem);
//   prevButton.addEventListener('click', prevItem);
})