const startBtn = document.getElementById("startBtn");
const h1Element = document.querySelector("h1");

startBtn.addEventListener("click", function () {
  h1Element.scrollIntoView({ behavior: "smooth" });
});

const d3 = document.getElementById("d3");
d3.addEventListener("click", function () {
  window.location.href = "d3.js/d3.html";
});

const cytoscape = document.getElementById("cytoscape");
cytoscape.addEventListener("click", function () {
  window.location.href = "cytoscape.js/cytoscape.html";
});

const vis = document.getElementById("vis");
vis.addEventListener("click", function () {
  window.location.href = "vis.js/vis.html";
});
