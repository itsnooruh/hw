// const input = document.querySelector("input");
// const buttons = document.querySelectorAll("button");
// const output = document.querySelector(".output");

// const data = [];
// output.innerText = data;

// buttons.forEach((e) => {
//   e.addEventListener("click", () => {
//     data[e.innerText](input.value);
//     output.innerText = data;
//   });
// });

// const upperCaseModifier = (string) =>
//   "#" +
//   string
//     .replace(/\s+/g, " ")
//     .trim()
//     .split(" ")
//     .map((e) => e[0].toUpperCase() + e.substr(1).toLowerCase())
//     .join("");

// const r = upperCaseModifier("     fHHGGJ    ");
// r;

// const g = (string) =>
// "#"+
// string.replace()

// function generate() {
//   const input = document.getElementById("input");
//   const upperCase = (string) =>
//     "#" +
//     string
//       .replace(/\s+/g, " ")
//       .trim()
//       .split(" ")
//       .map((e) => e[0].toUpperCase() + e.substr(1).toLowerCase())
//       .join("");
//       const result = uppercase();
//       document.getElementById("output").innerHTML = result;
// }

// const input = document.querySelector("input");
// const buttons = document.querySelectorAll("button");
// const output = document.querySelector(".output");

// const data = [];
// output.innerText = data;

// buttons.forEach((e) => {
//   e.addEventListener("click", () => {
//     data[e.innerText](input.value);
//     output.innerText = data;
//   });
// });

// function computation() {
//     let number = document.getElementById('input1').value;
//     let newNumber = number + (1/100 * number) + 1000;
//     let roundedNumber = Math.round(newNumber/100) * 100;
//     document.getElementById('output1').innerHTML = roundedNumber;
//   }

const input = document.querySelector("input");
const output = document.querySelector("div");

const upperCaseModifier = (input) => 
  "#" +
    string
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .map((e) => e[0].toUpperCase() + e.substr(1).toLowerCase())
      .join("");


output.innerHTML = upperCaseModifier;