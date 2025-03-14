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

<button type="reset">Remove</button>
`
console.log(todos.title)
}

// Handle form submission
todoForm.addEventListener('submit', async (e) => {
// add your code
event.preventDefault();
const Input = document.getElementById("todoInput").value;
const button = document.getElementsByTagName("button")

todoList.innerHTML += 
`
<input type="hidden" name="todoName" value="${Input}">
<p>${Input}</p> 

<button type="reset" id="remove">Remove</button>
`
let btn =document.getElementById("remove")
btn.addEventListener('click', removeFromCart)

function removeFromCart(event) {
  const todos = event.target.getAttribute('value');
  console.log(todos);
  const productIndex = todoList.indexOf(
    (todos) => todos.name == todos,
  );
  todoList.splice(productIndex - 1, 1);
}

console.log(Input)
});

// Load todos when page loads
fetchTodos();
