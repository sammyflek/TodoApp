document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const taskDescription = document.getElementById('task-description');
    const addTaskButton = document.getElementById('add-task-button');
    const taskContainer = document.getElementById('task-container');
    const todoSubheader = document.getElementById('todo-subheader');

    //dynamically creating the clear button for the input field
    const clearButton = document.createElement('button');
    clearButton.innerText = 'Clear';
    clearButton.classList.add('clear-button');

    //appending the clear button before the add task button
    const buttonContainer = document.getElementById('button-container');
    buttonContainer.insertBefore(clearButton, addTaskButton);


    //initially hide the clear button
    clearButton.style.display = "none";
    
    // first disable the add task button
    addTaskButton.disabled = true;
    
    taskInput.addEventListener('input', () => {
        if (taskInput.value.trim() !== "") {
            addTaskButton.classList.add('active');
            addTaskButton.disabled = false;
            clearButton.style.display = 'inline-block'
        } else {
            addTaskButton.classList.remove('active');
            addTaskButton.disabled = true;
            clearButton.style.display = "none";
        }
    });

    //add event listener for the clear button
    clearButton.addEventListener('click', () => {
        taskInput.value = "";  // Clear the task input field
        taskInput.focus();     // Focus the input field
        clearButton.style.display = 'none';  // Hide the "Clear" button again
    });

    // add event listener for the add button
    addTaskButton.addEventListener('click', function(){

        //creating a new task container
        let taskList = document.createElement('div');
        taskList.classList.add('task-list');

            //Creating a wrapper for the task check circle, task name and task description
            let taskCheckNameDescrip = document.createElement('div');
            taskCheckNameDescrip.classList.add('task-check-name-description')
            taskList.appendChild(taskCheckNameDescrip);

                //creating a check button
                let checkButton = document.createElement('div');
                checkButton.classList.add('check-circle');
                taskCheckNameDescrip.appendChild(checkButton);

                //creating a container for the task name and task description
                let taskNameandDescription = document.createElement('div');
                taskNameandDescription.classList.add('task-name-and-description');
                taskCheckNameDescrip.appendChild(taskNameandDescription)


                    //creating the task name
                    let taskName = document.createElement('li');
                    taskName.classList.add('task-name')
                    taskName.innerText = `${taskInput.value.trim()}`;
                    taskNameandDescription.appendChild(taskName);

                    //first checking if the description for the task is entered
                    if (taskDescription.value.trim() !== "") {
                        //creating the task description only if there's been an input
                        let inputTaskDescription = document.createElement('p');
                        inputTaskDescription.classList.add('task-input-description');
                        inputTaskDescription.innerText = `${taskDescription.value}`;
                        taskNameandDescription.appendChild(inputTaskDescription);
                    }


                

            // creating the delete button
            let deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete task'
            deleteButton.classList.add('delete-task');
            taskList.appendChild(deleteButton);

            //adding event listener for the delete button
            deleteButton.addEventListener('click', () => {
                taskList.remove();

                //checking if the taskContainer has nothing let in it
                if (taskContainer.children.length === 0) {
                    taskContainer.style.display = "none";  // Hide task container
                    todoSubheader.style.display = "block";  // Show subheader
                }
                
            });

        //appending the task to the task container if the input is not empty
        if (taskInput.value !== "") {
            taskContainer.classList.add('active')
            taskContainer.appendChild(taskList);
            todoSubheader.style.display = "none";
            
        };

        //Clearing the input and description fields
        taskInput.value = "";
        taskDescription.value = "";
        taskInput.focus();
        
    });



});