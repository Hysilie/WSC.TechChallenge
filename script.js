// NIGHT MODE //
const nightMode = document.getElementById("night");

if (localStorage.getItem("nightmode") === "true") {
  console.log(localStorage.getItem("nightmode"));
  document.body.classList.add("dark");
}

nightMode.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  localStorage.setItem("nightmode", document.body.classList.contains("dark"));
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
