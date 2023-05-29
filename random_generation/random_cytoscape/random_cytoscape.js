let cy = cytoscape({
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

// Veido 1200 virsotnes

let nodes1 = [];
let nodes2 = [];
let nodes3 = [];

for (let i = 1; i <= 400; i++) {
  let nodeId = i.toString();

  let nodeA = { data: { id: "a" + nodeId, parent: "a" }, classes: "node1" };
  let nodeB = { data: { id: "b" + nodeId, parent: "b" }, classes: "node2" };
  let nodeC = { data: { id: "c" + nodeId, parent: "c" }, classes: "node3" };

  nodes1.push(nodeA);
  nodes2.push(nodeB);
  nodes3.push(nodeC);
}

cy.add(nodes1);
cy.add(nodes2);
cy.add(nodes3);


// Veido 600 šķautnes
let nodes = cy.nodes();
let nodeCount = nodes.length;

for (let i = 1; i <= 600; i++) {
  let sourceNode = nodes[Math.floor(Math.random() * nodeCount)];
  let targetNode = nodes[Math.floor(Math.random() * nodeCount)];

  if (sourceNode.id() !== targetNode.id()) {
    cy.add([
      {
        data: {
          source: sourceNode.id(),
          target: targetNode.id(),
        },
      },
    ]);
  }
}

let layout = cy.layout({
  name: "random",
  spacingFactor: 2, // Distance starp virsotnes
});

layout.run();

let animation = cy.animate({ pan: { x: 400, y: 250 }, zoom: 1 });
