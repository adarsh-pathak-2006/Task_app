let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    const container = document.getElementById('tasksContainer');
    container.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        
        const checkForm = document.createElement('form');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onchange = () => toggleTask(index);
        checkForm.appendChild(checkbox);
        
        const taskP = document.createElement('p');
        taskP.className = task.completed ? 'done' : '';
        taskP.textContent = task.title;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTask(index);
        
        taskDiv.appendChild(checkForm);
        taskDiv.appendChild(taskP);
        taskDiv.appendChild(deleteBtn);
        
        container.appendChild(taskDiv);
    });
}

function addTask(title) {
    tasks.push({
        title: title,
        completed: false
    });
    saveTasks();
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('taskInput');
    const title = input.value.trim();
    
    if (title) {
        addTask(title);
        input.value = '';
    }
});

renderTasks();
