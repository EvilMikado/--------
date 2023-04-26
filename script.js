const header = document.querySelector('.header');
const headerBottom = document.querySelector('.header__bottom');
let sticky = headerBottom.offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else if (window.pageYOffset == 0){
    header.classList.remove("sticky");
  };
}
