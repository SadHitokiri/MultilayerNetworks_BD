var cy = cytoscape({
  container: document.getElementById("cy"),
  elements: [
    {
      data: { id: "a" },
    },
    {
      data: { id: "b" },
    },
    {
      data: { id: "c" },
    },
  ],
  style: [
    {
      selector: "layers",
      style: {
        "background-color": "#AADCFF",
        "label": "data(id)",
      },
    },
    {
      selector: "edge",
      style: {
        width: 1,
        "line-color": "black",
        "curve-style": "straight",
        "label": "",
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

var nodes1 = cy.add([
  {
    data: { id: "a1", parent: "a" },
    position: { x: 0, y: -50 },
    classes: "node1",
  },
  {
    data: { id: "a2", parent: "a" },
    position: { x: 50, y: -100 },
    classes: "node1",
  },
  {
    data: { id: "a3", parent: "a" },
    position: { x: 100, y: -50 },
    classes: "node1",
  },
]);

var nodes2 = cy.add([
  {
    data: { id: "b1", parent: "b" },
    position: { x: 60, y: 50 },
    classes: "node2",
  },
  {
    data: { id: "b2", parent: "b" },
    position: { x: 150, y: 50 },
    classes: "node2",
  },
  {
    data: { id: "b3", parent: "b" },
    position: { x: 50, y: 100 },
    classes: "node2",
  },
]);

var nodes3 = cy.add([
  {
    data: { id: "c1", parent: "c" },
    position: { x: 60, y: 230 },
    classes: "node3",
  },
  {
    data: { id: "c2", parent: "c" },
    position: { x: 10, y: 280 },
    classes: "node3",
  },
  {
    data: { id: "c3", parent: "c" },
    position: { x: 80, y: 280 },
    classes: "node3",
  },
]);

var edges = cy.add([
  {
    data: { id: "edge0", source: "b1", target: "a1" },
  },
  {
    data: { id: "edge1", source: "b3", target: "c1" },
  },
  {
    data: { id: "edge2", source: "b1", target: "b2" },
  },
  {
    data: { id: "edge3", source: "b1", target: "b3" },
  },
  {
    data: { id: "edge4", source: "a1", target: "a2" },
  },
  {
    data: { id: "edge5", source: "a1", target: "a3" },
  },
  {
    data: { id: "edge6", source: "a2", target: "a3" },
  },
  {
    data: { id: "edge7", source: "c1", target: "c2"},
  },
  {
    data: { id: "edge8", source: "c1", target: "c3" },
  },
]);

var animation = cy.animate({
  pan: {x: 400, y: 250},
  zoom:1,

})
