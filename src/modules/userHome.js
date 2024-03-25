export function userHome(listUser) {
    const header = document.getElementById("header");
    const loginB = document.getElementById("login");
    const button2 = document.getElementById("features");
    const button3 = document.getElementById("support");
    const button1 = document.getElementById("home");
    loginB.style.fontSize = "34px";
    loginB.style.border = "none";
    loginB.style.boxShadow = "none";
    loginB.textContent = listUser +": Sign out";
    button2.textContent = "Add Project";
    button3.textContent = "Add Task";

//Set up user dashboard 

}