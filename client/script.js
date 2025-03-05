// Get DOM HTML Elements
// Fetch all todos when page loads
async function fetchTodos() {
// add your code
let addList = ''; // Initialize addList to store the todo items
    fetch(`api/todo`)
        .then(response => response.json())
        .then(data => {
            data.forEach((todo, index) => {
                // Using index + 1 to display the correct numbering
                addList += `<p>${index + 1}. ${todo.title}</p>`; 
            });
            console.log(data); //  Check the fetched data in console
            document.getElementById('todoList').innerHTML = addList; 
        })
        .catch(error => console.error('Error fetching todos:', error));
}

// Display todos in the list
function displayTodos(todos) {
// add your code
    // Get the element where you want to display the todos
    const todoList = document.getElementById('todoList');
    
    // Clear any existing items in the list
    todoList.innerHTML = '';

    // Loop through each todo and create a list item
    todos.forEach(todo => {
        const listItem = document.createElement('li'); // Create a new list item
        listItem.textContent = todo; // Set the text of the list item
        todoList.appendChild(listItem); // Append the list item to the list
    });


}

// Handle form submission
todoForm.addEventListener('submit', async (e) => {
// add your code  
button.addEventListener('click', displayTodos);
});

// Load todos when page loads
fetchTodos();


