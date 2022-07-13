const scrollDown = document.querySelector('.bg-content__btn');
const header = document.querySelector('.header');
const burger = document.querySelector('#burger');
const header_block = document.querySelector('.header-block');



window.onscroll = function() {
   if(window.pageYOffset >= header.offsetTop){
      header.classList.add('sticky');
   } else{
      header.classList.remove('sticky');
   }
}

function scrollTo(element) {
   window.scroll({
      left: 0,
      top: element.offsetTop, 
      behavior: 'smooth'
   })
}
scrollDown.addEventListener('click', ()=>{
   scrollTo(header);
})

burger.addEventListener('click', ()=>{
   if (header_block.classList.contains('_active')) {
      header_block.classList.remove('_active');
      burger.classList.remove('active');
      document.body.classList.remove('_lock');
   } else {
      header_block.classList.add('_active');
      burger.classList.add('active');
      document.body.classList.add('_lock');
   }
})




