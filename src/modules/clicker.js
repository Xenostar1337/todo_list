export function clicker(button) {
    let project = button.parentNode.parentNode;
    let taskArea = button.parentElement.parentElement.querySelector(".task-container");
    if (button.id == "p1") {
            let taskContainer = document.createElement("div");
            taskContainer.classList.add("task-container");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("task-checkbox");
            checkbox.checked = false; 
            taskContainer.appendChild(checkbox);
            let editableLabel = document.createElement("input");
            editableLabel.type = "text";
            editableLabel.value = "new task";
            editableLabel.classList.add("task-input");
            taskContainer.appendChild(editableLabel);
            taskArea.appendChild(taskContainer);
    }
    if (button.id == "p2") { 
        if (button.textContent === "Priority low") {
            button.textContent = "Priority med";
        } else if (button.textContent === "Priority med") {
            button.textContent = "Priority high";
        } else if (button.textContent === "Priority high") {
            button.textContent = "Priority low";
        }        
    }
    if (button.id == "p3") { 
        return "repop";
    } 
    if (button.id == "p4") { 
        project.remove();
    }  
    
}



