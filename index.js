'use strict';

const navSlide = () => {
 
  const nav = document.querySelector('.nav-links');
 
  const navLinks = document.querySelectorAll('.nav-links li');

  $('.burger').on('click', () => {
    nav.classList.toggle('nav-active');
    

    navLinks.forEach((link, index) => {
      //if this animation exists already empty it
      if(link.style.animation){
        link.style.animation = '';
      } else { //or else add this animation 
        link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + .5}s`;
      }
  
    });
  });
};


function autoScroll() {
  $(document).ready(function(){
    //targeting the anchor tags that has an href that starts with (^=) a "#"
    $('a[href^="#"]').on('click', function (event) {
      console.log('link clicked');
      event.preventDefault();

      let target = this.hash; 
      console.log(target);//grabing the element with the id/hash 
      let $target = $(target); //turning it into a jquery object
        console.log($target);
      $('html, body').animate({
        'scrollTop': $target.offset().top
      }, 1000, 'swing');
    });
  });
}


navSlide();
autoScroll();