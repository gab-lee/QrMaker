function generateQRCode() {
  const inputLink = document.getElementById("inputLink").value;
  const qrcodeDiv = document.getElementById("qrcode");
  if (!inputLink) {
    alert("Please enter a link or text.");
    return;
  }
  
  // Remove previously generated QR code (if any)
  while (qrcodeDiv.firstChild) {
    qrcodeDiv.removeChild(qrcodeDiv.firstChild);
  }
  // Generate the QR code using qrcode.js library
  new QRCode(qrcodeDiv, inputLink);
}

// Event listener for the button click
generateQR.addEventListener("click", () => {
  // Increment the number when the button is clicked
  generateQRCode()
  number++;
  // Update the number display
  updateNumberDisplay();
});



// Access the HTML elements
const numberDisplayElement = document.getElementById("numberDisplay");
const incrementButton = document.getElementById("incrementButton");

// Initial number
let number = 0;

// Function to update the number display
function updateNumberDisplay() {
  numberDisplayElement.textContent = number;
}

// Event listener for the button click
incrementButton.addEventListener("click", () => {
  // Increment the number when the button is clicked
  number++;
  // Update the number display
  updateNumberDisplay();
});

// Initial update to display the starting number (0)
updateNumberDisplay();
