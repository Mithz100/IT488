const form = document.getElementById('taskRequestForm');
const taskNameInput = document.getElementById('taskName');
const taskNameError = document.querySelector('#taskName + .error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Basic validation for Task Name (assuming it's required)
  if (taskNameInput.value.trim() === '') {
    taskNameError.textContent = 'Task name is required.';
    taskNameInput.classList.add('error');  // Add error class for styling
    return;  // Stop form submission if there's an error
  } else {
    taskNameError.textContent = '';
    taskNameInput.classList.remove('error');
  }

  // Submit the form (potentially using AJAX for asynchronous submission)
  // You'll need to implement your specific logic here for form submission
  // Here's a basic example (replace with your actual submission logic)
  console.log('Form submitted:', {
    taskName: taskNameInput.value,
    // ... other form data
  });
});
