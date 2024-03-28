export function populate(projectArray) {
    let content = document.getElementById("content");
    content.innerHTML = "";
    let projectsByPriority = {
        "Priority low": [],
        "Priority med": [],
        "Priority high": []
    };
    projectArray.forEach(project => {
        projectsByPriority[project.priority].push(project);
    });
    ["Priority high", "Priority med", "Priority low"].forEach(priorityLevel => {
        let projects = projectsByPriority[priorityLevel];
        projects.forEach(project => {
            let newDiv = createProjectDiv(project);
            content.appendChild(newDiv);
        });
    });
}

function createProjectDiv(project) {
    let newDiv = document.createElement("div");
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
        checkbox.checked = isChecked; 
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
    let priorityLevel = project.priority;
    if (priorityLevel === "Priority low") {
        newDiv.style.backgroundColor = "green";
    } else if (priorityLevel === "Priority med") {
        newDiv.style.backgroundColor = "yellow";
    } else if (priorityLevel === "Priority high") {
        newDiv.style.backgroundColor = "red";
    }
    let buttonLabels = ["Add Task", priorityLevel, "Save", "Del"];
    for (let k = 0; k < buttonLabels.length; k++) {
        let button = document.createElement("button");
        button.textContent = buttonLabels[k];
        button.id = "p" + (k + 1);
        button.classList.add("project-button");
        buttonArea.appendChild(button);
    }
    return newDiv;
}
