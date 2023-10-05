const iconButtons = document.querySelectorAll(".copy-icon");
iconButtons.forEach((iconButton) => {
  iconButton.addEventListener("click", copyToClipboard);
});

function copyToClipboard(event) {
  const button = event.target;
  const codeElement = button.closest(".main-section").querySelector("code");
  const code = codeElement.textContent;

  navigator.clipboard
    .writeText(code)
    .then(() => {
      // Code copied successfully
      const defaultIcon = button.innerHTML; // Store the default icon
      button.innerHTML = "Copied!";
      button.style.fontSize = "8px";
      setTimeout(() => {
        button.innerHTML = defaultIcon; // Restore the default icon
        button.style.fontSize = "24px";
      }, 1000);
    })
    .catch((error) => {
      // Unable to copy
      console.error("Failed to copy code: ", error);
    });
}
