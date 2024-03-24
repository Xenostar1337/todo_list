import './images/sticknotes.jpg'
import './images/logo.png';
import { home } from './home.js';
import { clear } from './clear.js';
clear();
home();

    const feat = document.getElementById("features");
    const supp = document.getElementById("support");
    const homes = document.getElementById("home");
    const login = document.getElementById("login");
    const signup = document.getElementById("signup");

feat.addEventListener('click', function() {
    console.log("worked");
});

supp.addEventListener('click', function() {
    console.log("worked");
});

homes.addEventListener('click', function() {
    clear();
    home();
});

login.addEventListener('click', function() {
    clear();
});

signup.addEventListener('click', function() {
console.log("worked");
});