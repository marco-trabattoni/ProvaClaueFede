var t = 0;
function toggleMenu(hamburger) {

if(t == 0){
  hamburger.src="Resources/closing.svg";
  document.getElementById('menuOpen').style.display = "block";
  document.getElementById('logo').style.color = "white";
  t = 1;
  document.getElementsByClassName('menu')[0].style.position = "fixed";
  document.body.style.overflowY = "noscroll";
} else {
  hamburger.src="Resources/hamburger.svg";
  document.getElementById('menuOpen').style.display = "none";
  document.getElementById('logo').style.color = "var(--green";
  t = 0;
  document.getElementsByClassName('menu')[0].style.position = "relative";
  document.body.style.overflowY = "scroll";
}

}


function introCover(image) {
    setTimeout(() => {
        image.style.opacity = 0;
        setTimeout(() => {
            image.style.display = "none";
        }, 1000);
    }, 3000);
}

window.onscroll = function(ev) {
  if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
      document.getElementById('last').style.position = "fixed";
  } else {
    document.getElementById('last').style.position = "absolute";
  }
};