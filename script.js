
// Select the "All Complete" checkbox
function toggleAll(checkbox) {
    const taskCheckboxes = document.querySelectorAll('.task-checkbox');
    taskCheckboxes.forEach((taskCheckbox) => {
        taskCheckbox.checked = checkbox.checked;
    });
}

// Add event listeners to individual checkboxes
const taskCheckboxes = document.querySelectorAll('.task-checkbox');
taskCheckboxes.forEach((taskCheckbox) => {
    taskCheckbox.addEventListener('change', () => {
        const checkAllCheckbox = document.getElementById('checkAll');
        checkAllCheckbox.checked = Array.from(taskCheckboxes).every(checkbox => checkbox.checked);
    });
});
