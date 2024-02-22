var t = 0;
function toggleMenu(hamburger) {

if(t == 0){
  hamburger.src="Resources/closing.svg";
  document.getElementById('menuOpen').style.display = "block";
  document.getElementById('logo').style.color = "white";
  t = 1;
  document.getElementsByClassName('menu')[0].style.position = "fixed";
  document.body.style.overflowY = "hidden";
  document.body.style.height = '100vh';
  document.body.style.position = 'fixed';
  document.querySelector('meta[name="theme-color"]').setAttribute("content", "#2C3C20");
  document.body.style.backgroundColor = "#2C3C20";
} else {
  hamburger.src="Resources/hamburger.svg";
  document.getElementById('menuOpen').style.display = "none";
  document.getElementById('logo').style.color = "var(--green";
  t = 0;
  document.getElementsByClassName('menu')[0].style.position = "relative";
  document.body.style.overflowY = "scroll";
  document.body.style.height = 'auto';
  document.body.style.position = 'relative';
  document.querySelector('meta[name="theme-color"]').setAttribute("content", "#ffffff");
  document.body.style.backgroundColor = "#ffffff";
}

}


function introCover(image) {
    setTimeout(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#ffffff");
        document.body.style.backgroundColor = "#ffffff";
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