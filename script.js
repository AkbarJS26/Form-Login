// SUBMIT
const form = document.querySelector('#login .form-login-wrapper #form');
console.log(form);

const alertMessage = document.querySelector('#login .container .row .col-xxl-4 .alert');
console.log(alert);

form.addEventListener('submit', (e) => {

    alertMessage.classList.add('showAlertMessage');
    e.preventDefault();

})
// SUBMIT END

// SHOW/HIDE PASSWORD
const passwordInput = document.querySelector('#login .form-login-wrapper form .password .password-input');
console.log(passwordInput);

const eyeSlash = document.querySelector('#login .form-login-wrapper form .password .bi-eye-slash');
console.log(eyeSlash);

eyeSlash.addEventListener('click', () => {

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeSlash.classList.replace('bi-eye-slash', 'bi-eye');
    } else {
        passwordInput.type = 'password';
        eyeSlash.classList.replace('bi-eye', 'bi-eye-slash');
    }

})
// SHOW/HIDE PASSWORD END