export function clear() {
    const contents = document.getElementById("content");
    const divs = contents.querySelectorAll("div");
    const buttons = contents.querySelectorAll("button");
    const notes = document.getElementById("stickies");
    if (notes) {
        notes.remove();   
    }
    
     if (divs.length > 0) {
         divs.forEach(function(div) {
             div.remove();
         }); 
     }
     if (buttons.length > "") {
         buttons.forEach(function(button) {
             button.remove();
         }); 
     }
}