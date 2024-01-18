// Forms, User Input, Validation Feedback.
//One of the crucial functions of the web is accepting user input.

document.querySelector(`form`).addEventListener(`submit`, (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target));
  alert(JSON.stringify(data));
});
