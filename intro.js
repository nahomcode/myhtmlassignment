function addition(a, b) {
  return a + b;
}

console.log("final answer:", addition(11, 22));
let h2element = document.querySelector("h2");
h2element.innerText = addition(1, 2);
console.log(h2element.innerText);
