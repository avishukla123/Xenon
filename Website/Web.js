const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
// Add this to your existing JavaScript or create a new JS file

document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function () {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Perform validation or send the data to the server as needed
      // For simplicity, let's just log the values to the console
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);

      // You can add AJAX or other logic to send the data to the server
      document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function () {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Create a FormData object to send form data
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);

      // Replace 'YOUR_SERVER_ENDPOINT' with the actual URL to handle form submissions
      const serverEndpoint = 'rs8090348505@gmail.com';

      // Use fetch to send a POST request to the server
      fetch(serverEndpoint, {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Handle the server response, if needed
          console.log('Server Response:', data);
        })
        .catch(error => {
          // Handle errors
          console.error('Error:', error.message);
        });
    });
  }
});

 

