export function signUp() {       
        const signupContainer = document.createElement('div');
        signupContainer.classList.add('signup-container');

        const signupForm = document.createElement('form');
        signupForm.classList.add('signup-form');
        signupForm.style.fontSize = "35px";
        signupForm.style.display = "grid";
        signupForm.style.gap = "10px";
        signupForm.style.justifyContent = "center";
        signupForm.style.alignContent = "center";
        signupForm.style.border = "2px solid green";
        signupForm.style.padding = "4px";        
    
        const nameLabel = document.createElement('label');
        nameLabel.textContent = "Name:";
        const nameInput = document.createElement('input');
        nameInput.type = "text";
        nameInput.placeholder = "Enter your name";
        nameInput.required = true;
        nameInput.style.fontSize = "30px";
        nameInput.id = "name";
    
        const emailLabel = document.createElement('label');
        emailLabel.textContent = "Email:";
        const emailInput = document.createElement('input');
        emailInput.type = "email";
        emailInput.placeholder = "Enter your email";
        emailInput.required = true;
        emailInput.style.fontSize = "30px";
        emailInput.id = "email";

        const usernameLabel = document.createElement('label');
        usernameLabel.textContent = "Username:";
        const usernameInput = document.createElement('input');
        usernameInput.type = "text";
        usernameInput.placeholder = "Create a username";
        usernameInput.required = true;
        usernameInput.style.fontSize = "30px";
        usernameInput.id = "alias";

        const passwordLabel = document.createElement('label');
        passwordLabel.textContent = "Password:";
        const passwordInput = document.createElement('input');
        passwordInput.type = "password";
        passwordInput.placeholder = "Create a password";
        passwordInput.required = true;
        passwordInput.style.fontSize = "30px";
        passwordInput.id = "password";
    
        const submitButton = document.createElement('button');
        submitButton.id = "submitButton";
        submitButton.textContent = "Sign Up";
        submitButton.style.fontSize = "30px";
        submitButton.style.width = "fit-content";
        

        const contentDiv = document.getElementById('content');
        signupForm.appendChild(nameLabel);
        signupForm.appendChild(nameInput);
        signupForm.appendChild(emailLabel);
        signupForm.appendChild(emailInput);
        signupForm.appendChild(usernameLabel);
        signupForm.appendChild(usernameInput);
        signupForm.appendChild(passwordLabel);
        signupForm.appendChild(passwordInput);
        signupForm.appendChild(submitButton);
        signupContainer.appendChild(signupForm);   
        signupContainer.appendChild(submitButton);     
        contentDiv.appendChild(signupContainer);
    
}