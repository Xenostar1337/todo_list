import './images/sticknotes.jpg'
import './images/logo.png';
import { homeLogin } from './modules/newHome.js';
import { clear } from './modules/clear.js';
import { feature } from './modules/features.js';
import { support } from './modules/support.js';
import { signup } from './modules/signup.js';
import { loggedIn } from './modules/loggedIn.js';
import { log } from './modules/logOut.js';
const button2 = document.getElementById("features");
const button3 = document.getElementById("support");
const button1 = document.getElementById("home");
const loginB = document.getElementById("login");
let amLoggedIn = false;
clear();
homeLogin();
signUpListen();

function signUpListen() {
    const signupB = document.getElementById("signup");
    signupB.addEventListener('click', function() {
        clear();
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
        loggedIn("Billy");
        amLoggedIn = true;    
    } else {
        const confirmed = window.confirm('Are you sure you want to logout?');
        if (confirmed) {
            log();    
        }        
    }
});
