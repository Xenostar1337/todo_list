export function newProject(name, priority, tasks) {
    return {
        name: name,
        priority: priority,
        tasks: tasks.map(task => ({ name: task[0], checked: task[1] }))
    };
}




//projectArray[0].tasks[1].checked = true;   modify a checkbox

//const myNewProject = newProject("Project Name","low",[["Task 1", false]]);