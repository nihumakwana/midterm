
function calculateFactorial() {
  const input = document.getElementById("numberInput").value;
  const outputDiv = document.getElementById("output");

  if (input === "" || input < 0) {
    outputDiv.innerHTML = "Please enter a valid non-negative number.";
    return;
  }
  let factorial = 1;
  for (let i = 1; i <= input; i++) {
    factorial *= i;
  }
  outputDiv.innerHTML = `${input}! = ${factorial}`;
}
