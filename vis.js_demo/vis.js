
  var nodes = new vis.DataSet([
    { id: 1, label: "Node 1", group: "group1" },
    { id: 2, label: "Node 2", group: "group1" },
    { id: 3, label: "Node 3", group: "group1" },
    { id: 4, label: "Node 4", group: "group2" },
    { id: 5, label: "Node 5", group: "group2" },
    { id: 6, label: "Node 6", group: "group2" },
    { id: 7, label: "Node 7", group: "group3" },
    { id: 8, label: "Node 8", group: "group3" },
    { id: 9, label: "Node 9", group: "group3" },
  ]);

  var edges = new vis.DataSet([
    { id: 1, from: 1, to: 2 },
    { id: 2, from: 1, to: 3 },
    { id: 3, from: 2, to: 3 },
    { id: 4, from: 1, to: 4 },
    { id: 5, from: 4, to: 5 },
    { id: 6, from: 4, to: 6 },
    { id: 7, from: 5, to: 7 },
    { id: 8, from: 7, to: 8 },
    { id: 9, from: 7, to: 9 },
  ]);

  var layers = {
    groups: {
      group1: { color: "blue" },
      group2: { color: "green" },
      group3: { color: "red" },
    },
    nodes: {
      font: {
        color: "white",
      },
    },
  };

  var data = {
    nodes: nodes,
    edges: edges,
  };

  var container = document.getElementById("graph");

  var network = new vis.Network(container, data, layers);



