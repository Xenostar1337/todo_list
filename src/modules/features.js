export function feature() {
    const parent = document.getElementById("content");
    const divElement = document.createElement('div');
    const ulElement = document.createElement('ul');
    const items = [
    'Task Creation',
    'Task Management',
    'Categories or Tags',
    'Priority Sorting',
    'Reminders and Notifications',
    'Collaboration',
    'Customization',
    'Data Syncing',
    'Export and Import',
    'Accessibility',
    ];

    items.forEach(item => {
        const liElement = document.createElement('li');
        liElement.textContent = item;
        liElement.style.fontSize = "32px";
        ulElement.appendChild(liElement);
    });
    divElement.appendChild(ulElement);
    parent.appendChild(divElement);
    const imge = document.createElement("img");
    imge.src = "./images/sticknotes.jpg"
    imge.style.width = "100%";
    imge.style.marginTop = "0%";
    imge.id = "stickies";
    document.body.appendChild(imge); 
}