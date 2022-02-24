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
=======
setInterval(() => {
  next();
}, 2000);

// Search-bar js
var data = JSON.parse(localStorage.getItem("data")) || [];
// Click events
var showCity = true;
var showType = true;
var showPref = true;
document.querySelector("#cities").addEventListener("click", showCities);
document.querySelector("#type").addEventListener("click", showTypes);
document.querySelector("#preference").addEventListener("click", showPreference);

function showCities() {
  var cities = data.cities;
  if (showCity) {
    cities.map(function (data) {
      var option = document.createElement("option");
      option.setAttribute("value", data.text);
      document.querySelector("#city").append(option);
    });
    showCity = false;
  }
}

function showTypes() {
  var types = data.types;
  if (showTypes) {
    types.map(function (data) {
      var types = document.createElement("option");
      types.setAttribute("value", data.text);
      document.querySelector("#types").append(types);
    });
    showTypes = false;
  }
}
function showPreference() {
  var preference = data.preferences;
  if (showPref) {
    preference.map(function (data) {
      var preferences = document.createElement("option");
      preferences.setAttribute("value", data.text);
      document.querySelector("#pref").append(preferences);
    });
    showPref = false;
  }
}
