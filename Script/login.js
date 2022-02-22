//students
document.querySelector("#students").addEventListener("click", function () {
  document.querySelector("#company").style.borderBottom = "none";
  document.querySelector("#company").style.color = "grey";
  students.style.borderBottom = "2px solid blue";
  students.style.color = "blue";

  document.querySelector("#lbox").innerHTML;
  document.querySelector(".facebook").style.display="block";
  document.querySelector(".google").style.display="block";
  document.querySelector(".linkdin").style.display="none";
});

//company
document.querySelector("#company").addEventListener("click", function () {
  document.querySelector("#students").style.borderBottom = "none";
  document.querySelector("#students").style.color = "grey";
  company.style.borderBottom = "2px solid blue";
  company.style.color = "blue";
  document.querySelector("#lbox").innerHTML =
    `If you are a student looking for internships, please login as a student by clicking <a href="signup.html"> here.</a>`;
  // document.querySelector(".facebook").remove;


  document.querySelector(".facebook").style.display="none";
  document.querySelector(".google").style.display="none";
  document.querySelector(".linkdin").style.display="block";

  // document.querySelector(".google").;
  // document.createElement(".linkdin").window.location.href="https://www.linkedin.com/uas/login?"
});

document.querySelector(".here").addEventListener("click", function () {
  document.querySelector("#students").style.borderBottom = "none";
  company.style.borderBottom = "2px solid red";
});

// login button
document.querySelector("#form").addEventListener("submit", myFormSubmit);

var signupArr = JSON.parse(localStorage.getItem("signUpDetails")) || [];
function myFormSubmit() {
  event.preventDefault();
  var signupObj = {
    email: document.querySelector(".email").value,
    pass: document.querySelector(".password").value,
  };

  signupArr.push(signupObj);
  console.log(signupArr);
  localStorage.setItem("signUpDetails", JSON.stringify(signupArr));

  document
    .querySelector("input[type='submit']")
    .addEventListener("click", function () {
      window.location.href = "index.html";
    });
}

// var regdUsers = JSON.parse(localStorage.getItem("signUpDetails"));
// console.log(regdUsers);

// document.querySelector("#form").addEventListener("submit", formSubmit);

// var form = document.querySelector("#form");

// //console.log(form.user.value);
// // form.id.value
// function formSubmit(event) {
//   event.preventDefault();

//   var user = form.email.value;
//   var pass = form.password.value;
//   console.log(user, pass);

//   var flag= false
//   for (var i = 0; i < regdUsers.length; i++) {
//     if (regdUsers[i].user == user && regdUsers[i].password == pass) {
//       flag=true;
//     } else {
//       flag=false;
//     }

//   }
//   if (flag==true){
//     alert("login Successfull")
//     window.location.href = "index.html";
//   }
//   if(flag==false){
//     alert("Login fail")
//   }
// }
