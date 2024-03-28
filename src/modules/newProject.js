export function newProject(name, priority, tasks) {
    return {
        name: name,
        priority: priority,
        tasks: tasks.map(task => ({ name: task[0], checked: task[1] }))
    };
}
