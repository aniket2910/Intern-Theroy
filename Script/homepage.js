var item = 1;

document.querySelector(".prevousBtn").addEventListener("click", prev);
document.querySelector(".nextBtn").addEventListener("click", next);

// To get previous container
function prev() {
  var items = document.querySelectorAll(".items > div");
  if (item == 1) {
    item = items.length;
  } else {
    item--;
  }
  showItem();
}

// To get next container
function next() {
  var items = document.querySelectorAll(".items > div");
  if (item == items.length) {
    item = 1;
  } else {
    item++;
  }
  showItem();
}
// Show current Item in container
function showItem() {
  var items = document.querySelectorAll(".items > div");
  for (var i = 0; i < items.length; i++) {
    if (i + 1 == item) {
      items[i].classList.toggle("activeBox");
    } else {
      items[i].classList.remove("activeBox");
    }
  }
}
showItem();
// setInterval(() => {
//   next();
// }, 1000);
