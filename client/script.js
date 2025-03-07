// Get DOM HTML Elements
const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
// Fetch all todos when page loads
async function fetchTodos() {
  // add your code
  try {
    fetch("/api/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.forEach((todos) => {
          displayTodos(todos);
        });
      });
  } catch (error) {}
}

// Display todos in the list
function displayTodos(todos) {
todoList.innerHTML += 
`
<input type="hidden" name="todoName" value="${todos.title}">
<p>${todos.title}</p>
`
console.log(todos.title)
}

// Handle form submission
todoForm.addEventListener('submit', async (e) => {
// add your code
document.getElementsByTagName("button").submit();
});

// Load todos when page loads
fetchTodos();
