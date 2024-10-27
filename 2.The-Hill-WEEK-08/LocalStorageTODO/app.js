const input = document.querySelector('#list');
const bnt1 = document.querySelector('.btn1');

const todoList = document.querySelector('#todoList');


const loadTasks = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(taskText => addTask(taskText));
};

bnt1.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(input.value);
    input.value = '';
});


const addTask = (taskText) => {
    if (!taskText) return;

    console.log('tache', taskText);
        const newList = document.createElement("li");
newList.textContent = taskText;
todoList.appendChild(newList);

const btnDele = document.createElement('button')
    btnDele.textContent = ('Delete');
    newList.appendChild(btnDele);


    btnDele.addEventListener("click", () =>{
        newList.remove();
        deleteTask(taskText);

    });
    
    saveTasks(taskText);

};

const saveTasks = (taskText) => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

document.addEventListener("DOMContentLoaded", loadTasks);

const deleteTask = (taskText) => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
