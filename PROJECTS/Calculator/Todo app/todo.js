let todoList = [
    {
        item: 'Iphone',
        dueDate: '18/01/2024'
    },

    {
        item: 'Macbook',
        dueDate: '18/01/2024'
    }
];

displayTodoList();

function addTodo(){
    let todoInputElement = document.querySelector('#todoInput');
    let dateElement = document.querySelector('#todoDate');

    let todoItem = todoInputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    todoInputElement.value = '';
    dateElement.value = '';

    displayTodoList();
}

function displayTodoList(){
    let containerItems = document.querySelector('.todoContainer');
    let newHtml = '';

    for (let i = 0; i < todoList.length; i++){
        let {item, dueDate} = todoList[i];
        newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class ="js-dltButton" onclick = "todoList.splice(${i}, 1);
            displayTodoList();">Delete</button>
        `;
    }
    containerItems.innerHTML = newHtml;
}