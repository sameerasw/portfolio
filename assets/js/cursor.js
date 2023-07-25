const cursor = document.getElementById("cursor");
//select all the links on the page
const links = document.querySelectorAll("a");


const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
}

window.addEventListener('mousemove', moveCursor)

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursor.classList.add('blur-mini');
    cursor.classList.add('cursor-grow');
  })
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('blur-mini');
    cursor.classList.remove('cursor-grow');
  })
}
)
