//Scroll-indicator
window.onscroll = function() 
{
  testaScroll();
};

function testaScroll() 
{
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  let scrolled = (winScroll / height) * 100;
  
  document.getElementById("testa-bar").style.width = scrolled + "%";

  let parallax = 50 + ((scrolled/100)*100);

  document.getElementById("home").style.backgroundPosition = `center ${parallax}%`;
  //var gradScroll = 270 + ((scrolled/100) * 45);

  //document.getElementById("testa-bar").style.background = `linear-gradient(${gradScroll}deg, #d39c3a, #D4AF6E)`;
}