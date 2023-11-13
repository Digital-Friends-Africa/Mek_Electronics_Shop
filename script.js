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

})


// to toggle menu tab via clicking the menu bar located in the nav bar

let menu_button = document.querySelector('#menuBar')
 let menuList = document.querySelector('#menuList');

let isToggled = false;

function toggleFunction() {

// toggle logic
  if (isToggled) {
   
    // Code for when toggled off******
    // // want to add the display property set to 'none'
    menuList.style.display = "none";
    menu_button.style.background = "url(./images/menuButton.svg)";
    console.log("click function is working status :toggled OFF")

  } else {
    // to remove the display property or set to 'unset'
    menuList.style.display = "unset";
    menu_button.style.background = "url(./images/menuButtonX.svg) no-repeat";
    menu_button.style.width = "20px";
    console.log("click function is working status :toggled ON");
  }
  // Update the toggle state
  isToggled = !isToggled;
}
// Add event listener for toggled states
if (menu_button) {
  menu_button.addEventListener('click',toggleFunction);
  
} else {
  console.error('Element not found in the DOM');
}

// //    click function user side
// menu_button.addEventListener("click", ()=>{
//     console.log("click function is working")
// })




