// Ģenere random dati
let data = [];
let layerCount = 3;

for (let layerIndex = 1; layerIndex <= layerCount; layerIndex++) {
  let layer = {
    layer: layerIndex,
    nodes: [],
    links: [],
  };

  let nodeCount = Math.floor(1200/ layerCount); // virsotnes sk. un sadala slāņos
  let startNodeId = (layerIndex - 1) * nodeCount + 1;

  // cikls, kas izveido virsotnes un pievieno id.
  for (let nodeIndex = 1; nodeIndex <= nodeCount; nodeIndex++) {
    let nodeId = startNodeId + nodeIndex - 1;

    let node = {
      id: nodeId,
      x: Math.floor(Math.random() * 400) + 50, // random virsotne koordinati x asi (no 50 līdz 450)
      y: Math.floor(Math.random() * 300) + 50, // random virsotne koordinati y asi (no 50 līdz 350)
    };

    layer.nodes.push(node);

    if (layerIndex > 1) {
      // pievieno savienojumi starp virsotnes
      let randomNodeIndex = Math.floor(
        Math.random() * data[layerIndex - 2].nodes.length
      );
      let randomNode = data[layerIndex - 2].nodes[randomNodeIndex];

      layer.links.push({
        source: nodeId,
        target: randomNode.id,
      });
    }
  }

  data.push(layer);
}

// Izveidojam force simulation, lai norādīt savienojumu garumu
let simulation = d3
  .forceSimulation()
  .force(
    "link",
    d3
      .forceLink()
      .id((d) => d.id)
      .distance(30) // savienojuma garums
  )
  .force("charge", d3.forceManyBody().strength(-5)) //šķautnes garums
  .force("center", d3.forceCenter(450, 425)); //Vairākslāņu grafu pozicija

// Vairākslāņu grafu demonstrēšana svg konteinerā
let svg = d3.select("svg");
let layerSelection = svg // izveidojam slāņi
  .selectAll(".layer")
  .data(data)
  .enter()
  .append("g")
  .attr("class", "layer");

let linksSelection = layerSelection // izveidojam šķautnes
  .selectAll("line")
  .data((d) => d.links)
  .enter()
  .append("line")
  .attr("stroke", "black")
  .attr("stroke-width", 0.5);

let nodesSelection = layerSelection
  // izveidojam virsotnes
  .selectAll("circle")
  .data((d) => d.nodes)
  .enter()
  .append("circle")
  .attr("r", 6)
  .attr("fill", (d) => {
    // ģenere random virsotnes krāsas
    let colors = ["blue", "green", "red"];
    return colors[Math.floor(Math.random() * colors.length)];
  });

nodesSelection
  .on("mouseover", (event, d) => {
    // Informacija par virsotne un slāņi
    let layer = data.find((layer) => layer.nodes.includes(d));
    // tooltip izmantots, lai paradīt tekstu ar dati
    d3.select("#tooltip")
      .style("visibility", "visible")
      .html(`Slānis: ${layer.layer} Virsotne: ${d.id}`);
  })
  .on("mousemove", (event) => {
    // kursora pozicija
    d3.select("#tooltip")
      .style("top", event.pageY - 10 + "px")
      .style("left", event.pageX + 10 + "px");
  })
  .on("mouseout", () => {
    // teksts pazūd
    d3.select("#tooltip").style("visibility", "hidden");
  });

let drag = d3 //funkcija, lai ar kursoru pārbīdīt virsotnes
  .drag()
  .on("start", (event, d) => {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  })
  .on("drag", (event, d) => {
    d.fx = event.x;
    d.fy = event.y;
  })
  .on("end", (event, d) => {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  });

nodesSelection.call(drag);

//informācija par virsotņu un šķautņu pozicijām
simulation.nodes(data.flatMap((d) => d.nodes));
simulation.force("link").links(data.flatMap((d) => d.links));
simulation.on("tick", () => {
  linksSelection
    .attr("x1", (d) => d.source.x)
    .attr("y1", (d) => d.source.y)
    .attr("x2", (d) => d.target.x)
    .attr("y2", (d) => d.target.y);

  nodesSelection.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
});

// pārvietošanās grafā
let zoom = d3.zoom().on("zoom", (event) => {
  layerSelection.attr("transform", event.transform);
});

svg.call(zoom);
