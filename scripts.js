const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Dividing numbers when values are missing.
  if  (dividend === "" || divider === "") {
    result.innerText = "Please enter both numbers.";
    return
  }
  // An invalid division should log an errer in the console
  if (divider === "0") {
    result.innerText = "Division not performed. Invalid number provided. Try again"
    console.log("Error: Division by zero is not allowed");
    return
  }

  // Providing anything that is not a number should crash the program
  if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerText = "Something critical went wrong. Please reload the page"
    console.log("Error: Non number value entered")
  }

  // Dividing numbers result in a decimal number
  result.innerText = Math.floor(dividend / divider)
});