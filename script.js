//selectors

const todoInput = document.querySelector (".todo-input") //input
const todoButton = document.querySelector (".todo-button")//button
const todoList = document.querySelector (".todo-list") //ul

//functions
const addTodo = (event) => {
    event.preventDefault()
    //creating new div class todoDiv
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todoDiv")
    //create li
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value;
    todoDiv.classList.add("todo-item")
    todoDiv.appendChild(newTodo)
    //create completed button
    const completedButton = document.createElement ("button");
    completedButton.innerHTML = ""
}



//eventListeners
todoButton.addEventListener("click", addToDo)