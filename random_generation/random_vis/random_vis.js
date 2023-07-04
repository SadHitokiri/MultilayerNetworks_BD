// //ģenere 1200 virsotnes + pievieno nosaukums
// let nodes = new vis.DataSet();
// for (let i = 1; i <= 1200; i++) {
//   nodes.add({
//     id: i,
//     label: "Node " + i,
//     group: "group" + Math.floor(Math.random() * 3) + 1,
//   });
// }

// // ģenere 600 šķautnes ar random savienojumiem
// let edges = new vis.DataSet();
// for (let i = 1; i <= 600; i++) {
//   let from = Math.floor(Math.random() * 1200) + 1;
//   let to = Math.floor(Math.random() * 1200) + 1;
//   if (from != to) {
//     edges.add({
//       id: i,
//       from: from,
//       to: to,
//     });
//   }
// }

// // ģenere random slāni un pievieno virsotnes
// let groups = ["group1", "group2", "group3"];
// let layerColors = ["blue", "yellow", "red"];
// let layers = {
//   groups: {},
//   nodes: {
//     font: {
//       color: "white",
//     },
//   },
// };

// for (let i = 0; i < groups.length; i++) {
//   let group = groups[i];
//   let color = layerColors[Math.floor(Math.random() * 3)];
//   layers.groups[group] = { color: color };
// }

// let data = {
//   nodes: nodes,
//   edges: edges,
// };
// let container = document.getElementById("graph");
// let network = new vis.Network(container, data, layers);

let nodes = [];
let edges = [];
let groups = {};
let layerColors = ["blue", "yellow", "red"];

for (let i = 1; i <= 1000; i++) {
  nodes.push({
    id: i,
    label: "Node " + i,
    group: "group" + getRandomNumber(0, 2),
  });
}

for (let i = 1; i <= 400; i++) {
  let from = getRandomNumber(0, 1000);
  let to = getRandomNumber(0, 1000);
  if (from !== to) {
    edges.push({
      id: i,
      from: from,
      to: to,
    });
  }
}

for (let i = 0; i <= 2; i++) {
  let group = "group" + (i + 1);
  let color = layerColors[getRandomNumber(0, 2)];
  groups[group] = { color: color };
}

let data = {
  nodes: new vis.DataSet(nodes),
  edges: new vis.DataSet(edges),
};

let network = new vis.Network(document.getElementById("graph"), data, {
  groups: groups,
  nodes: {
    font: {
      color: "white",
    },
  },
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
