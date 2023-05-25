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

let nodes1 = cy.add([]);
let nodes2 = cy.add([]);
let nodes3 = cy.add([]);

// Ģenere 400 virsotnes viena slāņa ar nosaukumu .node1
for (let i = 1; i <= 400; i++) {
  let nodeId = "a" + i;
  let node = { data: { id: nodeId, parent: "a" }, classes: "node1" };
  nodes1.push(cy.add(node));
}

// Ģenere 400 virsotnes viena slāņa ar nosaukumu .node2
for (let i = 1; i <= 400; i++) {
  let nodeId = "b" + i;
  let node = { data: { id: nodeId, parent: "b" }, classes: "node2" };
  nodes2.push(cy.add(node));
}

// Ģenere 400 virsotnes viena slāņa ar nosaukumu .node3
for (let i = 1; i <= 400; i++) {
  let nodeId = "c" + i;
  let node = { data: { id: nodeId, parent: "c" }, classes: "node3" };
  nodes3.push(cy.add(node));
}

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
