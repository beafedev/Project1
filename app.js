const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// function display ERROR message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = message;
}

// function display SUCCESS message
function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = message;
}

// addEventListener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (userName.value === '') {
        showError(userName, 'Username is required');
    } else {
        showSuccess(userName, 'form-control success');
    }
});

//try
