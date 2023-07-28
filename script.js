function generateQRCode() {
  const inputLink = document.getElementById("inputLink").value;
  const qrcodeDiv = document.getElementById("qrcode");

  if (!inputLink) {
    alert("Please enter a link or text.");
    return;
  }

  // Generate the QR code using qrcode.js library
  new QRCode(qrcodeDiv, inputLink);
}
