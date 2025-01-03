// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask() {
//     if (inputBox.value === '') {
//         alert('You must write something!!!')
//     } else {
//         let li = document.createElement('li');
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement('span');
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value = "";
// }
// inputBox.addEventListener('keydown', function (event) {
//     if (event.key === 'Enter') {
//         event.preventDefault(); // Prevent default action (e.g., form submission if any)
//         addTask(); // Call the addTask function
//     }
// });



const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Load tasks from localStorage on page load
window.onload = function () {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        listContainer.innerHTML = savedTasks;
        addDeleteFunctionality(); // Reattach delete functionality to existing items
    }
};

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!!!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;

        // Create and append delete button
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; // × symbol
        span.classList.add("delete-btn");
        li.appendChild(span);

        listContainer.appendChild(li);
        saveTasks(); // Save to localStorage
    }
    inputBox.value = ""; // Clear the input box
    addDeleteFunctionality(); // Attach delete functionality to the new task
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

// Add 'Enter' key functionality
inputBox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default action (e.g., form submission if any)
        addTask(); // Call the addTask function
    }
});

// Attach delete functionality to all tasks
function addDeleteFunctionality() {
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(button => {
        button.onclick = function () {
            this.parentElement.remove(); // Remove the parent <li>
            saveTasks(); // Update localStorage
        };
    });
}

// Add delete functionality to existing tasks on page load
addDeleteFunctionality();



// function addTask() {
//     if (inputBox.value === '') {
//         alert('You must write something!!!');
//     } else {
//         let li = document.createElement('li');
//         li.innerHTML = inputBox.value;

//         // Create and append edit button
//         let editSpan = document.createElement('span');
//         editSpan.innerHTML = '<i class="fas fa-edit"></i>'; // Font Awesome edit icon
//         editSpan.classList.add("edit-btn");
//         li.appendChild(editSpan);

//         // Create and append delete button
//         let deleteSpan = document.createElement('span');
//         deleteSpan.innerHTML = '<i class="fas fa-trash"></i>'; // Font Awesome trash icon
//         deleteSpan.classList.add("delete-btn");
//         li.appendChild(deleteSpan);

//         listContainer.appendChild(li);
//         saveTasks(); // Save tasks to localStorage
//     }
//     inputBox.value = ""; // Clear input box
//     addEditFunctionality(); // Attach edit functionality to the new task
//     addDeleteFunctionality(); // Attach delete functionality to the new task
// }

// // Function to handle editing functionality
// function addEditFunctionality() {
//     const editButtons = document.querySelectorAll('.edit-btn');
//     editButtons.forEach((button) => {
//         button.onclick = function () {
//             const li = this.parentElement;
//             const text = li.firstChild.nodeValue; // Get current task text
//             inputBox.value = text; // Set input box with current text
//             li.remove(); // Remove the task from the list
//             saveTasks(); // Save the updated tasks
//         };
//     });
// }
