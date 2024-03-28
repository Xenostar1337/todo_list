export function populate(projectArray) {
    let content = document.getElementById("content");
    content.innerHTML = "";
    for (let i = 0; i < projectArray.length; i++) {
        let project = projectArray[i];
        let newDiv = document.createElement("div");
        newDiv.id = "project" + i;
        newDiv.classList.add("project");
        let projectLabel = document.createElement("input");
        projectLabel.type = "text";
        projectLabel.value = project.name; 
        projectLabel.classList.add("projectName");
        newDiv.appendChild(projectLabel);       
        for (let j = 0; j < project.tasks.length; j++) {
            let task = project.tasks[j].name; 
            let isChecked = project.tasks[j].checked;
            let taskContainer = document.createElement("div");
            taskContainer.classList.add("task-container");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("task-checkbox");
            checkbox.checked = isChecked; // Set checked property based on task data
            taskContainer.appendChild(checkbox);
            let editableLabel = document.createElement("input");
            editableLabel.type = "text";
            editableLabel.value = task;
            editableLabel.classList.add("task-input");
            taskContainer.appendChild(editableLabel);
            newDiv.appendChild(taskContainer);
        }
        let buttonArea = document.createElement("div");
        buttonArea.style.display = "flex";
        buttonArea.style.justifyContent = "space-between";
        newDiv.appendChild(buttonArea);
        let buttonLabels = ["Add Task", "Priority low", "Save", "Del"];
        for (let k = 0; k < buttonLabels.length; k++) {
            let button = document.createElement("button");
            button.textContent = buttonLabels[k];
            button.id = "p" + (k + 1);
            button.classList.add("project-button");
            buttonArea.appendChild(button);
        }
        content.appendChild(newDiv);
    }
}
