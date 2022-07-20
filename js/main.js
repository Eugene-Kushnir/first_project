const scrollDown = document.querySelector('.bg-content__btn');
const header = document.querySelector('.header');
const burger = document.querySelector('#burger');
const header_block = document.querySelector('.header-block');
const body = document.body;
const arrowTop = document.querySelector('.up-arrow');
const emptyContainer =document.querySelector('.empty-container');


//         scroll To Header
window.onscroll = function() {
   if(window.pageYOffset >= header.offsetTop){
      header.classList.add('sticky');
   } else{
      header.classList.remove('sticky');
   }
};
function scrollTo(element) {
   window.scroll({
      left: 0,
      top: element.offsetTop, 
      behavior: 'smooth'
   });
}           
scrollDown.addEventListener('click', ()=>{
   scrollTo(header);
})
//            Active/Close Burger
burger.addEventListener('click', ()=>{
      header_block.classList.toggle('_active');
      burger.classList.toggle('active');
      body.classList.toggle('_lock');
      emptyContainer.addEventListener('click', ()=>{
         if(header_block.classList.contains('_active')){
            header_block.classList.remove('_active');
            burger.classList.remove('active');
            body.classList.remove('_lock');
         }
      })
})
//            Close Burger Exc
document.addEventListener('keydown', (e)=>{
   if (e.key == 'Escape' && header_block.classList.contains('_active')){
         header_block.classList.remove('_active');
         burger.classList.remove('active');
         body.classList.remove('_lock');
      }
})


//            Scroll Top
arrowTop.addEventListener('click', ()=>{
   window.scroll({
      left: 0,
      top: 0, 
      behavior: 'smooth'
   })
   arrowTop.classList.add('_hidden');
})

//            Active ScrollTop
function activeScrollTop() {
   if(window.pageYOffset > 50){
      arrowTop.classList.add('_active');
   } else{
      arrowTop.classList.remove('_active');
   }
}
window.onscroll = activeScrollTop;






