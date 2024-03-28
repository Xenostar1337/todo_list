export function userHome(aliasInput) {
    const header = document.getElementById("header");
    const loginB = document.getElementById("login");
    const button2 = document.getElementById("features");
    const button3 = document.getElementById("support");
    const button1 = document.getElementById("home");
    loginB.style.fontSize = "34px";
    loginB.style.border = "none";
    loginB.style.boxShadow = "none";
    loginB.textContent = aliasInput + ": Sign out";
    button1.textContent ="Add Project";
    button2.style.display ="none";
    button3.style.display ="none";
}   

 