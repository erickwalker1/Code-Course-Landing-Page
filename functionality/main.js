const form = document.querySelector(".form");
const emailInput = document.querySelector(".email-input");
const errorMessage = document.querySelector(".error-message");
const passwordInput = document.querySelector(".password");

form.addEventListener("submit", function (event) {
  // JS Email Regex
  const mailformat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!mailformat.test(emailInput.value.trim())) {
    event.preventDefault();
    errorMessage.style.display = "initial";
    emailInput.style.borderBottom = "1px solid red";
    passwordInput.style.marginTop = "1px";
  }
});
