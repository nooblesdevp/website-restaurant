
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "20px";
    //document.getElementById("navbar").style.background = "rgb(25,25,25)";

    //document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.top = "100px";
   // document.getElementById("navbar").style.background = "transparant";
    //document.getElementById("logo").style.fontSize = "35px";
  }
}

/*$(document).ready(function(){
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 50) { 
        $('.navbar').addClass('shrink'); 
      } else { 
        $('.navbar').removeClass('shrink'); 
      } 
    }); 
   });
*/  

//---navbar---
const navSlide = ()=>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar li');
  
  burger.addEventListener('click', () => {
      //toggle Nav
      nav.classList.toggle('nav-active');
      //animate links
      navLinks.forEach((link, index) => {
        if(link.style.animation) {
          link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`
          }
      });
      //burger animation
      burger.classList.toggle('toggle');

  });
 
}

navSlide();