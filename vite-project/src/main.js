// import $ from 'jquery';  // Import jQuery
// import './style.css';    // Import CSS

// Gunakan window.onload untuk memastikan JavaScript dieksekusi setelah halaman dimuat
// window.onload = () => {
//   $('#change').click(() => {
//     $('#title').text("It's Fathin!");
//   });

//   $('#hide').click(() => {
//     $('#title').hide();
//     $('#change').hide();
//     $('#hide').text("Ctrl+R");
//   });
// };

// const texts = ["Hello World!", "It's Fathin", "Ctrl + R"];
// let currentIndex = 0;

// const textElement = document.getElementById("title");
// const button = document.getElementById("change");

// button.addEventListener("click", () => {

//   currentIndex = (currentIndex + 1) % text.length;
//   textElement.textContent = texts[currentIndex];
// });

// const textElement = document.getElementById('title');
// const button = document.getElementById('change');

// button.addEventListener('click', () => {
//   if (textElement.textContent === "Hello, World!") {
//     textElement.textContent = "It's Fathin";
//   } else {
//     textElement.textContent = 'Hello, World!';
//   }
// });
// import $ from 'jquery';  // Import jQuery
// import './style.css';    // Import CSS

const textElement = document.getElementById("title");
const nextButton = document.getElementById("change");
const hideButton = document.getElementById("hide");

let isTextChanged = false;

nextButton.addEventListener('click', () => {
  if (!isTextChanged) {
    textElement.textContent = "It's Fathin!";
    isTextChanged = true;
  } else {
    textElement.textContent = "Hello, world!";
    isTextChanged = false;
  }
});

hideButton.addEventListener('click', () => {
  textElement.style.display = 'none';
});