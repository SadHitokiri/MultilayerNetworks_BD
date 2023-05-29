let startBtn = document.getElementById("startBtn");
let endElement = document.getElementById("demoversion");

startBtn.addEventListener("click", function () {
  endElement.scrollIntoView({ behavior: "smooth" });
});

let d3 = document.getElementById("d3");
d3.addEventListener("click", function () {
  window.location.href = "/demo/d3.js_demo/d3.html";
});

let cytoscape = document.getElementById("cytoscape");
cytoscape.addEventListener("click", function () {
  window.location.href = "/demo/cytoscape.js_demo/cytoscape.html";
});

let vis = document.getElementById("vis");
vis.addEventListener("click", function () {
  window.location.href = "/demo/vis.js_demo/vis.html";
});

let d3_random = document.getElementById("random_d3");
d3_random.addEventListener("click", function () {
  window.location.href = "random_generation/random_d3/random_d3.html";
});

let cytoscape_random = document.getElementById("random_cytoscape");
cytoscape_random.addEventListener("click", function () {
  window.location.href = "random_generation/random_cytoscape/random_cytoscape.html";
});

let vis_random = document.getElementById("random_vis");
vis_random.addEventListener("click", function () {
  window.location.href = "random_generation/random_vis/random_vis.html";
});
