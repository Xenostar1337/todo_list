export function save() {
    //saves current state of div#content to an Array
    let projects = []; 
    let contents = document.querySelectorAll('div.project');
    contents.forEach((content) => {
        let projectName = content.querySelector('.projectName').value; 
        let priorityElement = content.querySelector('.priority');
        let priority = priorityElement ? parseInt(priorityElement.textContent, 10) : 0;
        let tasks = [];
        let taskContainers = content.querySelectorAll('.task-container');
        taskContainers.forEach(container => {
            let taskName = container.querySelector('.task-input').value;
            let isChecked = container.querySelector('.task-checkbox').checked;
            tasks.push({ name: taskName, checked: isChecked }); // Push task as an object
        });        
        projects.push({
            name: projectName,
            priority: priority,
            tasks: tasks
        });
    });    
    return projects;
}
