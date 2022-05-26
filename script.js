// NIGHT MODE //
const nightMode = document.getElementById("night");

console.log(nightMode);

nightMode.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// SUBMIT ALERT //

const form = document.getElementById("contact");

if (form) {
  form.addEventListener("submit", (e) => {
    alert("Merci pour votre message");
    e.preventDefault();
  });
}
// If condition used cause of an error when declarate without it cause of "null" return.
