const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent normal submit

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      form.innerHTML = `
          <div class="alert alert-success" role="alert">
            Thank you for your message! We'll get back to you soon.
          </div>
        `;
    } else {
      form.innerHTML = `
          <div class="alert alert-danger" role="alert">
            Oops! Something went wrong. Please try again.
          </div>
        `;
    }
  });
});
