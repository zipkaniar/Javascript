// Dom Olayları : Document Object Model
/* 
const button = document.querySelector(".btn");

const box = document.getElementById("id-box");

const box2 = document.getElementsByClassName("box");

console.log(box)



button.addEventListener("mouseenter", () => {
    console.log("Üzerine geldi.")
})

button.addEventListener("mouseleave", () => {
    console.log("Üzerinden ayrıldı.")
})

console.log(button); */

let todos = [];


function addTodo() {
    const todoInput = document.getElementById("todo-input")
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert("Görev kısmı boş geçilemez");
        return
    }
    const todo = {
        id: Date.now(),
        text: todoText,
        completed: false
    }

    todos.push(todo);

    renderTodos();
    todoInput.value = "";
}

function toggleTodoComplition(id) {
    const todo = todos.find(todo => todo.id === id);

    if (todo) {
        todo.completed = !todo.completed
        renderTodos();
    }

}




function renderTodos() {

    const todoTableBody = document.getElementById("todoTableBody")
    todoTableBody.innerHTML = "";

    todos.forEach((todo) => {
        const tr = document.createElement("tr");
        const tdText = document.createElement("td");
        tdText.textContent = todo.text;


        // Çözümlenicek 
        if (todo.isCompleted) {
            tdText.classList.add("completed")
        } else {
            tr.classList.remove("completed")
        }

        const tdActions = document.createElement("td");

        const deleteButton = document.createElement("button");
        const complateButton = document.createElement("button");

        complateButton.textContent = "Tamamlandı";

        deleteButton.textContent = "Sil";
        deleteButton.onclick = () => deleteTodo(todo.id)

        complateButton.onclick = () => toggleTodoComplition(todo.id)

        tdActions.appendChild(deleteButton);
        tdActions.appendChild(complateButton);

        tr.appendChild(tdText);
        tr.appendChild(tdActions);
        todoTableBody.appendChild(tr);

    })

    console.log(todos)
}


function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
}