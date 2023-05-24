var cy = cytoscape({
  container: document.getElementById("cy"),
  elements: [
    { data: { id: "a" } },
    { data: { id: "b" } },
    { data: { id: "c" } },
  ],
  style: [
    {
      selector: "layers",
      style: {
        "background-color": "#AADCFF",
        label: "data(id)",
      },
    },
    {
      selector: "edge",
      style: {
        width: 0.5,
        "line-color": "black",
        "curve-style": "straight",
        label: "",
      },
    },
    {
      selector: ".node1",
      style: {
        "background-color": "blue",
      },
    },
    {
      selector: ".node2",
      style: {
        "background-color": "green",
      },
    },
    {
      selector: ".node3",
      style: {
        "background-color": "red",
      },
    },
  ],
});

var nodes1 = cy.add([]);
var nodes2 = cy.add([]);
var nodes3 = cy.add([]);

// Ģenere 500 virsotnes viena slāņa ar nosaukumu .node1
for (var i = 1; i <= 500; i++) {
  var nodeId = "a" + i;
  var node = { data: { id: nodeId, parent: "a" }, classes: "node1" };
  nodes1.push(cy.add(node));
}

// Ģenere 250 virsotnes viena slāņa ar nosaukumu .node2
for (var i = 1; i <= 250; i++) {
  var nodeId = "b" + i;
  var node = { data: { id: nodeId, parent: "b" }, classes: "node2" };
  nodes2.push(cy.add(node));
}

// Ģenere 250 virsotnes viena slāņa ar nosaukumu .node3
for (var i = 1; i <= 250; i++) {
  var nodeId = "c" + i;
  var node = { data: { id: nodeId, parent: "c" }, classes: "node3" };
  nodes3.push(cy.add(node));
}

// Veido 500 šķautnes
var nodes = cy.nodes();
var nodeCount = nodes.length;

for (var i = 0; i < 500; i++) {
  var sourceNode = nodes[Math.floor(Math.random() * nodeCount)];
  var targetNode = nodes[Math.floor(Math.random() * nodeCount)];

  if (sourceNode.id() !== targetNode.id()) {
    cy.add([
      {
        data: {
          id: sourceNode.id() + "-" + targetNode.id(),
          source: sourceNode.id(),
          target: targetNode.id(),
        },
      },
    ]);
  }
}

var layout = cy.layout({
  name: "random",
  spacingFactor: 2, // Distance starp virsotnes
});

layout.run();

var animation = cy.animate({ pan: { x: 400, y: 250 }, zoom: 1 });
