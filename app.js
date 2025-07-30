document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const userInput = document.getElementById("userInput").value;
  document.getElementById("confirmation").innerText =
    Thanks! You’ll get your access code at: ${userInput};
});
