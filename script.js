const todoList = [];

function add(){
    const inputElement = document.getElementById('input-todo');
    todoList.push(inputElement.value);
    inputElement.value = "";

    renderToDoList();
}

function renderToDoList(){
    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML = "";
    for(const todoItem of todoList)
    {
        listContainer.innerHTML += `<div class="todoitem">
            <input type="checkbox">
            ${todoItem}</div>` ;
    }
}