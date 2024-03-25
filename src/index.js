import './images/sticknotes.jpg'
import './images/logo.png';
import { homeLogin } from './modules/newHome.js';
import { clear } from './modules/clear.js';
import { feature } from './modules/features.js';
import { support } from './modules/support.js';
import { signUp } from './modules/signup.js';
import { log } from './modules/logOut.js';
import { userHome } from './modules/userHome.js';

const button2 = document.getElementById("features");
const button3 = document.getElementById("support");
const button1 = document.getElementById("home");
const loginB = document.getElementById("login");

let userNameInput; 
let emailInput; 
let aliasInput; 
let passwordInput;
let amLoggedIn = false;

function signUpListen() {
    const signupB = document.getElementById("signup");
    signupB.addEventListener('click', function() {
        clear(); 
        signUp();
        submitInfo();
    }); 
}

function submitInfo() {
    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener('click', function(event) {               
        userNameInput = document.getElementById("name").value;
        emailInput = document.getElementById("email").value;
        aliasInput = document.getElementById("alias").value;
        passwordInput = document.getElementById("password").value;
        if (userNameInput != "" && emailInput !== "" && aliasInput !== "" && passwordInput !== "") {
            amLoggedIn = true;
            clear();
            userHome(aliasInput);
        }
    });
}

button1.addEventListener('click', function() {
    if (amLoggedIn == false) {
        clear();
        homeLogin();
        signUpListen();    
    } else {
    }
});

button2.addEventListener('click', function() {
    if (amLoggedIn == false) {
        clear();
        feature();    
    } else {        
    }   
});

button3.addEventListener('click', function() {
    if (amLoggedIn == false) {
        clear();
        support();
    } else {
    }
});

loginB.addEventListener('click', function() {
    if (amLoggedIn == false) {
        clear();
        amLoggedIn = true;
        userHome("Xenostar");  
    } else {
        const confirmed = window.confirm('Are you sure you want to logout?');
        if (confirmed) {
            amLoggedIn = false;
            log();    
        }        
    }
});

clear();
homeLogin();
signUpListen();