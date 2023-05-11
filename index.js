// Import stylesheets
import './style.css';

// Write Javascript code!

// Get the draggable element
const dragElement = document.getElementById('dragElement');

// Function to handle the drag start event
function handleDragStart(event) {
  // Set the data being dragged
  event.dataTransfer.setData('text/plain', event.target.id);
}

// Add dragstart event listener to the draggable element
dragElement.addEventListener('dragstart', handleDragStart);

// Function to handle the drag over event
function handleDragOver(event) {
  event.preventDefault();
}

// Add dragover event listener to the document
document.addEventListener('dragover', handleDragOver);

// Function to handle the drop event
function handleDrop(event) {
  event.preventDefault();

  // Get the dragged element's ID
  const draggedElementId = event.dataTransfer.getData('text/plain');

  // Get the dragged element
  const draggedElement = document.getElementById(draggedElementId);

  // Set the new position of the dragged element
  draggedElement.style.left = `${event.clientX}px`;
  draggedElement.style.top = `${event.clientY}px`;
}

// Add drop event listener to the document
document.addEventListener('drop', handleDrop);

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Drag</h1>`;
