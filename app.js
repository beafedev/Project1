const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const letter = /[a-z]/;
const upper = /[A-Z]/;
const number = /[0-9]/;

// function display ERROR message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerHTML = message;
}

// function display SUCCESS message
function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// function check email is valid
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// addEventListener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //UserName section
  if (!userName.value) {
    showError(userName, "Username is required");
  } else {
    showSuccess(userName, "form-control success");
  }
  // Email section
  if (!email.value) {
    showError(email, "email is required");
  } else if (!validateEmail(email.value)) {
    showError(email, "please input valid email format!");
  } else {
    showSuccess(email, "form-control success");
  }

  //Password section
  if (
    password.value.length < 6 ||
    password.value != password2.value ||
    !letter.test(password.value) ||
    !number.test(password.value) ||
    !upper.test(password.value)
  ) {
    if (password.length < 6) {
      showError(
        password,
        "Please make sure password is longer than 6 characters."
      );
      return false;
    }
    if (password.value != password2.value) {
      showError(password, "Please make sure passwords match.");
      showError(password2, "Please make sure passwords match.");
      return false;
    }
    if (!letter.test(password.value)) {
      showError(
        password,
        "Please make sure password includes a lowercase letter."
      );
      return false;
    }
    if (!number.test(password.value)) {
      showError(password, "Please make sure Password Includes a Digit");
      return false;
    }
    if (!upper.test(password.value)) {
      showError(
        password,
        "Please make sure password includes an uppercase letter."
      );
      return false;
    }
  } else {
    showSuccess(password, "form-control success");
    showSuccess(password2, "form-control success");
  }
});
