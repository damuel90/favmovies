import '../css/styles.scss';
import { storage, validations } from './services';
import { HOME } from './constants/routes';

const landing = document.getElementById("landing");
const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

const init = () => {
    if(storage.session.get()){
       location.replace(HOME);
    }
    document.addEventListener("DOMContentLoaded", app);
};

const app = () => {
    landing.classList.remove("hide")
    username.addEventListener("blur", validate);
    password.addEventListener("blur", validate);
    submit.addEventListener("click", login);
};

const validate = function ({ target }) {
    const father = target.parentElement;
    const label = father.firstElementChild;
    const [valid, message] = validations[target.name](target.value);
    if(!valid){
        father.classList.add("error");
        label.innerText = message;
        target.addEventListener("input", validate);
    }else{
        father.classList.remove("error")
        label.innerText = message
        target.removeEventListener("input", validate);
    }
};

const login = function (e) {
    e.preventDefault();
    validate({ target: username });
    validate({ target: password });
    const error = document.querySelectorAll(".error").length > 0;
    if(!error){
        storage.session.set({
            username: username.value.trim(), 
            password: password.value
        })
        location.replace(HOME);
    }
};

init();