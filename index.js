const startBtn = document.getElementById("startBtn");
const endElement = document.getElementById("demoversion");

startBtn.addEventListener("click", function () {
  endElement.scrollIntoView({ behavior: "smooth" });
});

const d3 = document.getElementById("d3");
d3.addEventListener("click", function () {
  window.location.href = "d3.js_demo/d3.html";
});

const cytoscape = document.getElementById("cytoscape");
cytoscape.addEventListener("click", function () {
  window.location.href = "cytoscape.js_demo/cytoscape.html";
});

const vis = document.getElementById("vis");
vis.addEventListener("click", function () {
  window.location.href = "vis.js_demo/vis.html";
});
