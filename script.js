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

});


