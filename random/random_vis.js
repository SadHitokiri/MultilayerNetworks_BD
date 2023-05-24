//ģenere 1000 virsotnes + pievieno nosaukums
var nodes = new vis.DataSet();
for (var i = 0; i <= 1000; i++) {
  nodes.add({
    id: i,
    label: "Node " + i,
    group: "group" + Math.floor(Math.random() * 3) + 1,
  });
}

// ģenere 500 šķautnes ar random savienojumiem
var edges = new vis.DataSet();
for (var i = 1; i <= 500; i++) {
  var from = Math.floor(Math.random() * 1000) + 1;
  var to = Math.floor(Math.random() * 1000) + 1;
  if (from != to) {
    edges.add({
      id: i,
      from: from,
      to: to,
    });
  }
}

// ģenere random slāni un pievieno virsotnes
var groups = ["group1", "group2", "group3"];
var layerColors = ["blue", "green", "red"];
var layers = {
  groups: {},
  nodes: {
    font: {
      color: "white",
    },
  },
};
for (var i = 0; i < groups.length; i++) {
  var group = groups[i];
  var color = layerColors[Math.floor(Math.random() * 3)];
  layers.groups[group] = { color: color };
}

var data = {
  nodes: nodes,
  edges: edges,
};
var container = document.getElementById("graph");
var network = new vis.Network(container, data, layers);