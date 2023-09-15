// Assuming you have a DODGER element in your HTML like this:
// <div id="dodger"></div>

const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  // Get the current left position of the dodger
  const currentLeft = parseInt(dodger.style.left) || 0;

  // Calculate the new left position by subtracting a value (e.g., 10 pixels) to move it left
  const newLeft = currentLeft - 10;

  // Ensure the dodger stays within the boundaries of its container (adjust as needed)
  if (newLeft >= 0) {
    dodger.style.left = newLeft + 'px';
  }
}

function moveDodgerRight() {
  // Get the current left position of the dodger
  const currentLeft = parseInt(dodger.style.left) || 0;

  // Calculate the new left position by adding a value (e.g., 10 pixels) to move it right
  const newLeft = currentLeft + 10;

  // Ensure the dodger stays within the boundaries of its container (adjust as needed)
  if (newLeft + dodger.clientWidth <= window.innerWidth) {
    dodger.style.left = newLeft + 'px';
  }
}

// Example: Add event listeners to trigger the movement when certain keys are pressed
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (e.key === 'ArrowRight') {
    moveDodgerRight();
  }
});

