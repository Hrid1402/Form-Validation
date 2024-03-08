console.log("Working");
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');

const country = document.querySelector('#country');
const contryError = document.querySelector('#contryError');

const zipCode = document.querySelector('#zipCode');
const zipCodeError = document.querySelector('#zipCodeError');

const password = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');

const C_password = document.querySelector('#C_password');
const C_passwordError = document.querySelector('#C_passwordError');

email.addEventListener('keyup',()=>{
    if(email.validity.patternMismatch){
        emailError.textContent = "Incorrect Format";
        emailError.style.opacity = "100%";
    }else if(email.validity.valueMissing){
        emailError.textContent = "Empty space";
        emailError.style.opacity = "100%";
    }
    else{
        emailError.style.opacity = "0%";
    }
});

country.addEventListener('keyup',()=>{
    if(country.validity.patternMismatch){
        contryError.textContent = "Dont put numbers";
        contryError.style.opacity = "100%";
    }else if(country.validity.valueMissing){
        contryError.textContent = "Empty space";
        contryError.style.opacity = "100%";
    }
    else{
        contryError.style.opacity = "0%";
    }
});

zipCode.addEventListener('keyup',()=>{
    if(zipCode.validity.patternMismatch){
        console.log("missmatch")
        zipCodeError.textContent = "Just numbers are allowed";
        zipCodeError.style.opacity = "100%";
    }else if(zipCode.validity.valueMissing){
        zipCodeError.textContent = "Empty space";
        zipCodeError.style.opacity = "100%";
    }
    else{
        zipCodeError.style.opacity = "0%";
    }
});

password.addEventListener('keyup',()=>{
    if(password.validity.tooShort){
        passwordError.textContent = "Min 8 characters";
        passwordError.style.opacity = "100%";
    }else{
        passwordError.style.opacity = "0%";
    }
});

C_password.addEventListener('keyup',()=>{
    if(C_password.validity.tooShort){
        C_passwordError.textContent = "Min 8 characters";
        C_passwordError.style.opacity = "100%";
    }else if(password.value == C_password.value){
        C_passwordError.textContent = "passwords don't match";
        C_passwordError.style.opacity = "100%";
    }else {
        C_passwordError.style.opacity = "0%";
    }
});