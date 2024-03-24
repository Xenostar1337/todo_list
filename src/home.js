export function home() {
    document.body.style.height = "95vh"; 
    logo();
    header();
    buttons();    
    contents();   
    
};

function logo() {
    const logo = document.getElementById("logo");
    logo.style.width = "250px"; 
}

function header() {
    const head = document.getElementById("header");
    head.style.flex = "0";
    head.style.display = "flex";
    head.style.justifyContent = "space-between"
    head.style.alignItems = "center";
    head.style.width = "70vw";
    head.style.marginBottom = "auto";
    head.style.marginRight = "auto";
    head.style.marginLeft = "auto";
    head.style.borderBottom = "2px solid black";   
    head.style.minHeight = "fit-content";    
}

function buttons() {
    const feat = document.getElementById("features");
    const supp = document.getElementById("support");
    const plans = document.getElementById("home");
    const login = document.getElementById("login");
    const nav = document.getElementById("nav");
    //remove backgrounds and borders. Style buttons.
    feat.style.background = "none";
    supp.style.background = "none";
    plans.style.background = "none";
    login.style.background = "none";
    feat.style.border = "none";
    supp.style.border = "none";
    plans.style.border = "none";
    feat.style.fontSize = "28px";
    supp.style.fontSize = "28px";
    plans.style.fontSize = "28px";
    //login button
    login.style.color = "orange";
    login.style.borderColor = "orange";
    login.style.padding = "10px";
    login.style.textShadow = "-2px -2px 1px black";
    login.style.textShadow = "2px 2px 1px black";
    login.style.borderRadius = "50%";
    login.style.fontSize = "30px";
    login.style.border = "5px solid orange";
    login.style.boxShadow = "2px 2px 1px black";
    //nav menu
    nav.style.width = "40%";
    nav.style.display = "flex";
    nav.style.justifyContent = "space-around";    
}


function contents() {
    const parent = document.getElementById("content");

    const div1 = document.createElement("div");
    div1.textContent = "All your tasks";
    div1.style.fontSize = "60px";
    div1.style.marginTop = "5%";

    const div2 = document.createElement("div");
    div2.textContent = "Organized. Simply.";
    div2.style.fontSize = "40px";

    const button = document.createElement("button");
    button.textContent = "Sign up";
    button.style.fontSize = "36px";
    button.style.borderRadius = "50%"; 
    button.style.padding = "20px";
    button.style.backgroundColor = "orange"; 
    button.style.border = "5px solid black"; 
    button.style.marginBottom = "auto";
    button.style.marginTop = "25px";
    button.id = "signup";

    const imge = document.createElement("img");
    imge.src = "./images/sticknotes.jpg"
    imge.style.width = "100%";
    imge.style.marginTop = "0%";
    imge.id = "stickies";
    
    parent.style.display = "flex";
    parent.style.flexDirection = "column";
    parent.style.alignItems = "center";
    parent.style.justifyContent = "center";
    parent.style.marginBottom = "auto";

    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";

    parent.appendChild(div1);
    parent.appendChild(div2);
    parent.appendChild(button);
    document.body.appendChild(imge);    
}
