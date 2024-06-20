const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const taskListTable = document.getElementById('taskListTable');
const newTaskForm = document.getElementById('newTaskForm'); // Added for new task form

searchButton.addEventListener('click', () => {
  // ... existing search functionality (unchanged)
});

// Optional: Add styling focus to the new task form section on page load
newTaskForm.classList.add('new-task-form'); // Add a class for CSS targeting

// You might add logic to handle new task form submission here (e.g., using AJAX)
newTaskForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission
  // Implement your logic to submit new task data (title, progress, priority, due date)
  console.log('New task data submitted:', {
    // Access form element values here (e.g., newTaskForm.elements['taskTitle'].value)
  });
});
