# Form Login Validation

Hi everyone, this is my second project, which is to make a Responsive Login Validation Form. I'm using default validation with HTML5 not with Javascript. I'm using Javascript to showing/hide passwords, and display an Alert message when the form is submitted.

----

## In this project i use :
- HTML 5
- CSS 3
- [Bootstrap Framework V5.3](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- Vanilla Javascript

----

## Background Video
I used a tag  `<video></video>` on html5.
>For example like this, which I've added a class of bootstrap framework v5.3
```html
<video src="./Assets/video-bg.mp4" height="100%" width="100%" autoplay muted loop
class="position-absolute z-n1 object-fit-cover"></video>
```

----

## Javascript Syntax

- ##### Showing/Hide Password
This is the Javascript syntax for show/hide passwords. So when the icon is clicked, the password will be visible, if you click it again, the password will not be visible

```javascript
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
```
>Preview

![password show](https://user-images.githubusercontent.com/119624307/215339881-dd0bb8c4-7c53-49e7-a8ad-353925194520.gif)

----

- ##### Alert Message
And this is the syntax for displaying a warning message when the form is submitted

```javascript
const form = document.querySelector('#login .form-login-wrapper #form');
console.log(form);

const alertMessage = document.querySelector('#login .container .row .col-xxl-4 .alert');
console.log(alert);

form.addEventListener('submit', (e) => {

    alertMessage.classList.add('showAlertMessage');
    e.preventDefault();

})
```

>Preview

![alert](https://user-images.githubusercontent.com/119624307/215387171-81e9c92a-3cf9-4ad9-b289-f08ef49962aa.gif)

 -----
 
## Validation Using HTML
very simple just add "required" to the input.

```html
<input type="email" class="email-input form-control border-1 py-2"
id="exampleFormControlInput1" placeholder="Email address" required>

<input type="password" class="password-input form-control border-1 py-2 id="exampleFormControlInput1" placeholder="Password" required>
<i class="bi bi-eye-slash"></i>
```
>Preview

![validatio](https://user-images.githubusercontent.com/119624307/215386706-c5050a25-87d5-4680-aa7b-3dcc8eb33636.gif)

----

>Thanks for visiting this repo😊
