import './images/sticknotes.jpg'
import './images/logo.png';
import './styles.css';
import { homeLogin } from './modules/newHome.js';
import { clear } from './modules/clear.js';
import { feature } from './modules/features.js';
import { support } from './modules/support.js';
import { signUp } from './modules/signup.js';
import { log } from './modules/logOut.js';
import { userHome } from './modules/userHome.js';
import { newUser } from './modules/newUser.js';
import { populate } from './modules/projectPop.js';
import { newProject } from './modules/newProject.js';

const button2 = document.getElementById("features");
const button3 = document.getElementById("support");
const button1 = document.getElementById("home");
const loginB = document.getElementById("login");

let userNameInput; 
let emailInput; 
let aliasInput; 
let passwordInput;
let amLoggedIn = false;
let userArray = []; 
let projectArray = [];
let taskArray = [];
let projectCounter = 1;

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
        let projectName;
        let projectTasks;
        passwordInput = document.getElementById("password").value;
        if (userNameInput != "" && emailInput !== "" && aliasInput !== "" && passwordInput !== "") {
            amLoggedIn = true;
            clear();
            let user = newUser(userNameInput, emailInput, aliasInput, passwordInput);
            //userArray.push(user);  //have more than 1 user
            userArray = user        //one user only, less work.
            projectArray.push(newProject("Project " + projectCounter,"low",[["Task", false]]));
            projectCounter++;
            userHome(aliasInput);  
            populate(projectArray);        
            addListeners();             
        }
    });
}

function addListeners() {
    let content = document.getElementById("content");
    let divs = content.querySelectorAll("div");
    function addButtonEventHandlers(div) {// Get all buttons inside the div
        let buttons = div.querySelectorAll("button");
        buttons.forEach(button => {// Add event listener to each button
            button.addEventListener("click", function() {
                console.log("Button id that was pressed:", button.id);
                //clicked(button.id); click should figure out what the button wants to do. and do it.
            });
        });
    }
    divs.forEach(div => {// Iterate over each div and add event handlers to buttons
        addButtonEventHandlers(div);
    });
}

button1.addEventListener('click', function() {
    if (amLoggedIn == false) {
        clear();
        homeLogin();
        signUpListen();    
    } else {
        console.log("clicked");
        projectArray.push(newProject("Project " + projectCounter,"low",[["Task", false]]));
        projectCounter++;
        populate(projectArray);
        addListeners();
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
        //check for saved file and assigh it to userArray
        //axe for username and password
        //check username and password to be true on file
        let user = newUser("adam", "j@j.com", "Gerome", "1234");

        projectArray.push(newProject("Project " + projectCounter,"low",[["Task", true]]));
        projectCounter++;
        userHome("Gerome");  
        populate(projectArray);        
        addListeners();    

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