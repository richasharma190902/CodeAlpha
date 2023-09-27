// Get the color picker elements and the button
const colorPicker1 = document.getElementById('colorPicker1');
const colorPicker2 = document.getElementById('colorPicker2');
const gradientButton = document.getElementById('gradientButton');
const add_text=document.querySelector("h3");

// Function to set the background gradient
function setGradient() {
  const color1 = colorPicker1.value;
  const color2 = colorPicker2.value;
  document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  add_text.textContent=`linear-gradient(to right, ${color1}, ${color2})`;

}

// Add an event listener to the button
gradientButton.addEventListener('click', setGradient);
