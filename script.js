let tasks = document.getElementsByClassName('tasks');
const locStorage = window.localStorage
locStorage.clear()
for (let index = 0; index < tasks.length; index++) {
    locStorage.setItem(`${index}`, `${tasks[index].innerHTML}`)
}




const check = (event) => {

    event.checked ? event.nextElementSibling.style.textDecoration = "line-through" : event.nextElementSibling.style.textDecoration = "none";

}



const addTask = () => {

    let div = document.createElement('div');
    let list = document.getElementById('taskList');
    console.log(list);

    div.innerHTML = `<div><span onclick="deleteTask(this)">x</span><input type="checkbox" onclick="check(this)"><label class="tasks">${task.value}</label></div>
<br>`;
    list.appendChild(div);
    task.value = '';
    let len = document.getElementsByClassName('tasks').length;
    locStorage.setItem(`${len-1}`, `${document.getElementsByClassName('tasks')[len-1].innerHTML}`)
}

const deleteTask = (event) => {
    let parent = event.parentNode.parentNode;
    let list = document.getElementById('taskList');
    list.removeChild(parent);
}



