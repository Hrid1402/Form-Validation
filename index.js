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

const errorColorStyle = "2px solid red"
const goodColorStyle = "2px solid rgba(255, 255, 255, 0.661)"
function errorColor(element){
    if (Array.isArray(element)){
        element.forEach(i => {
            i.style.border = errorColorStyle;
        });
    }
    else{
        element.style.border = errorColorStyle;
    }
    
}

function goodColor(element){
    if (Array.isArray(element)){
        element.forEach(i => {
            i.style.border = goodColorStyle;
        });
    }
    else{
        element.style.border = goodColorStyle;
    }
    
}

goodColor([email, country , zipCode, password, C_password]);




email.addEventListener('keyup',()=>{
    if(email.validity.patternMismatch){
        emailError.textContent = "Incorrect Format";
        emailError.style.opacity = "100%";

        errorColor(email);


    }else if(email.validity.valueMissing){
        emailError.textContent = "Empty space";
        emailError.style.opacity = "100%";

        errorColor(email);
    }
    else{
        emailError.style.opacity = "0%";
        
        goodColor(email);
    }
});

country.addEventListener('keyup',()=>{
    if(country.validity.patternMismatch){
        contryError.textContent = "Dont put numbers";
        contryError.style.opacity = "100%";
        errorColor(country);

    }else if(country.validity.valueMissing){
        contryError.textContent = "Empty space";
        contryError.style.opacity = "100%";
        errorColor(country);
    }
    else{
        contryError.style.opacity = "0%";
        goodColor(country);
    }
});

zipCode.addEventListener('keyup',()=>{
    if(zipCode.validity.patternMismatch){
        console.log("missmatch")
        zipCodeError.textContent = "Just numbers are allowed";
        zipCodeError.style.opacity = "100%";
        errorColor(zipCode);
    }else if(zipCode.validity.valueMissing){
        zipCodeError.textContent = "Empty space";
        zipCodeError.style.opacity = "100%";
        errorColor(zipCode);
    }
    else{
        zipCodeError.style.opacity = "0%";
        goodColor(zipCode);
    }
});

password.addEventListener('keyup',()=>{
    if(password.validity.tooShort){
        passwordError.textContent = "Min 8 characters";
        passwordError.style.opacity = "100%";
        errorColor(password);
    }else if(password.value != C_password.value){
        C_passwordError.textContent = "passwords don't match";
        C_passwordError.style.opacity = "100%";
        passwordError.style.opacity = "0%";
        goodColor(password);
        errorColor(C_password);
    }else{
        passwordError.style.opacity = "0%";
        goodColor(password);
    }
});

C_password.addEventListener('keyup',()=>{
    if(C_password.validity.tooShort){
        C_passwordError.textContent = "Min 8 characters";
        C_passwordError.style.opacity = "100%";
        errorColor(C_password);
    }else if(password.value != C_password.value){
        C_passwordError.textContent = "passwords don't match";
        C_passwordError.style.opacity = "100%";
        errorColor(C_password);
    }else if(password.value == C_password.value){
        C_passwordError.style.opacity = "0%";
        goodColor(C_password);
    }
});