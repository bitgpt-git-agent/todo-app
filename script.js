function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const taskList = document.getElementById('taskList');

        const taskItem = document.createElement('li');
        taskItem.textContent = taskValue;

        taskItem.onclick = function () {
            this.classList.toggle('completed');
        };

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}