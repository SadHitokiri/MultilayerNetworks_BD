// Izveidoti dati
const data = [
  {
    layer: 1,
    nodes: [
      { id: 1, x: 100, y: 100 },
      { id: 2, x: 200, y: 100 },
      { id: 7, x: 150, y: 50 },
    ],
    links: [
      { source: 1, target: 2 },
      { source: 1, target: 7 },
      { source: 7, target: 2 },
    ],
  },
  {
    layer: 2,
    nodes: [
      { id: 3, x: 100, y: 200 },
      { id: 4, x: 200, y: 200 },
      { id: 8, x: 200, y: 150 },
    ],
    links: [
      { source: 3, target: 4 },
      { source: 8, target: 4 },
      { source: 4, target: 2 },
    ],
  },
  {
    layer: 3,
    nodes: [
      { id: 5, x: 150, y: 250 },
      { id: 6, x: 250, y: 250 },
      { id: 9, x: 10, y: 50 },
    ],
    links: [
      { source: 5, target: 6 },
      { source: 5, target: 9 },
      { source: 5, target: 3 },
    ],
  },
];

// Izveidojam force simulation, lai norādīt savienojumu garumu
const simulation = d3
  .forceSimulation()
  .force(
    "link",
    d3
      .forceLink()
      .id((d) => d.id)
      .distance(50) // savienojuma garums
  )
  .force("charge", d3.forceManyBody().strength(-50)) //šķautnes garums
  .force("center", d3.forceCenter(400, 250)); //Vairākslāņu grafu pozicija

// Vairākslāņu grafu demonstrēšana svg konteinerā
const svg = d3.select("svg");
const layerSelection = svg // izveidojam slāņi
  .selectAll(".layer")
  .data(data)
  .enter()
  .append("g")
  .attr("class", "layer")

const linksSelection = layerSelection // izveidojam šķautnes
  .selectAll("line")
  .data((d) => d.links)
  .enter()
  .append("line")
  .attr("stroke", "black")
  .attr("stroke-width", 0.5);

const nodesSelection = layerSelection // izveidojam virsotnes
  .selectAll("circle")
  .data((d) => d.nodes)
  .enter()
  .append("circle")
  .attr("r", 6)
  .attr("fill", (d) => {
    switch (d.id) {
      case 1:
      case 2:
      case 7:
        return "blue";
      case 3:
      case 4:
      case 8:
        return "green";
      case 5:
      case 6:
      case 9:
        return "red";
    }
  });

const tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

nodesSelection
  .on("mouseover", (event, d) => {
    // Informacija par virsotne un slāņi
    const layer = data.find((layer) => layer.nodes.includes(d));
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

const drag = d3 //funkcija, lai ar kursoru pārbīdīt virsotnes
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
