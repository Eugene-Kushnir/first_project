const scrollDown = document.querySelector('.bg-content__btn');
const footer = document.querySelector('footer');

function scrollTo(element) {
   window.scroll({
      left: 0,
      top: element.offsetTop, 
      behavior: 'smooth'
   })
}
scrollDown.addEventListener('click', ()=>{
   scrollTo(footer);
})