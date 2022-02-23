var mainBtn = document.querySelector(".main-icon");
var secondBtn = document.querySelector(".second-icon");

mainBtn.addEventListener("click", toogleActiveClass);
secondBtn.addEventListener("click", toogleActiveClass);

//Function for open & close Sidebar
function toogleActiveClass() {
  var element = document.querySelector(".sidebar-container");
  element.classList.toggle("active");
}
