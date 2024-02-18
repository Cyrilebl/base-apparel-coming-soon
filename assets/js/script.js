// validation email
function validerEmail(email) {
  let emailRegex = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z]{2,6}$");
  return emailRegex.test(email);
}

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let messageError = document.querySelector(".error p");
  let messageValid = document.querySelector(".valid p");
  let emailInput = document.getElementById("email");
  let errorIcon = document.querySelector(".input-container .icon");

  //   Email is valid
  if (validerEmail(email)) {
    messageValid.style.display = "block";
    emailInput.style.border = "";
    messageError.style.display = "none";
    errorIcon.style.display = "none";
  } else {
    // Email is wrong
    messageValid.style.display = "none";
    emailInput.style.border = "1px solid red";
    messageError.style.display = "block";
    errorIcon.style.display = "block";
  }
});
