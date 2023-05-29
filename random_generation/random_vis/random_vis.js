//ģenere 1200 virsotnes + pievieno nosaukums
let nodes = new vis.DataSet();
for (let i = 1; i <= 1200; i++) {
  nodes.add({
    id: i,
    label: "Node " + i,
    group: "group" + Math.floor(Math.random() * 3) + 1,
  });
}

// ģenere 600 šķautnes ar random savienojumiem
let edges = new vis.DataSet();
for (let i = 1; i <= 600; i++) {
  let from = Math.floor(Math.random() * 1200) + 1;
  let to = Math.floor(Math.random() * 1200) + 1;
  if (from != to) {
    edges.add({
      id: i,
      from: from,
      to: to,
    });
  }
}

// ģenere random slāni un pievieno virsotnes
let groups = ["group1", "group2", "group3"];
let layerColors = ["blue", "yellow", "red"];
let layers = {
  groups: {},
  nodes: {
    font: {
      color: "white",
    },
  },
};

for (let i = 0; i < groups.length; i++) {
  let group = groups[i];
  let color = layerColors[Math.floor(Math.random() * 3)];
  layers.groups[group] = { color: color };
}

let data = {
  nodes: nodes,
  edges: edges,
};
let container = document.getElementById("graph");
let network = new vis.Network(container, data, layers);
