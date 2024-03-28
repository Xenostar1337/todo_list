export function save() {
    //saves current state of div#content to an Array
    let projects = []; 
    let contents = document.querySelectorAll('div.project');
    contents.forEach((content) => {
        let projectName = content.querySelector('.projectName').value; 
        let buttons = content.getElementsByClassName('project-button');
        let priorityElement = buttons[1]; 
        let priority = priorityElement.textContent;
        let tasks = [];        
        let taskContainers = content.querySelectorAll('.task-container');
        taskContainers.forEach(container => {
            let taskName = container.querySelector('.task-input').value;
            let isChecked = container.querySelector('.task-checkbox').checked;
            tasks.push({ name: taskName, checked: isChecked }); 
        });        
        projects.push({
            name: projectName,
            priority: priority,
            tasks: tasks
        });
    });    
    return projects;
}
