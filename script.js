// script.js
function generateMusic() {
  const username = document.getElementById('username').value;
  const genre = document.getElementById('genre').value;

  if (!username || !genre) {
    alert('Please fill out all fields');
    return;
  }

  // For simplicity, we'll just display a message with the selected genre.
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `<p>Hi ${username}! Your generated ${genre} music will play here.</p>`;
  // You would typically call a backend API to generate music based on the selected genre.
  // Here, you might use Magenta.js or a similar library to generate music on the client side.
}
