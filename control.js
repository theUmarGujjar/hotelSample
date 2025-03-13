function handleScroll() {
    console.log("Function is working");
    const elements = document.querySelectorAll('.right');
  
    elements.forEach(element => {
        element.classList.add('visible'); 
      
    });
  }
  
function lhandleScroll() {
    console.log("Function is working");
    const elements = document.querySelectorAll('.left');
  
    elements.forEach(element => {
        element.classList.add('lvisible'); 
      
    });
  }
  
  // Add event listener for scroll events
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('scroll', lhandleScroll);