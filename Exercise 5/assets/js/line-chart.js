document.addEventListener("DOMContentLoaded", () => {
  const margin = { top: 70, right: 200, bottom: 50, left: 60 };
  const width = 800;
  const height = 450;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const svg = d3.select("#line-chart")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("font-family", "sans-serif");

  const innerChart = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  d3.csv("assets/data/ARE_Spot_Prices.csv", d => {
    return {
      year: +d.Year,
      averagePrice: +d["Average Price (notTas-Snowy)"]
    };
    }).then(data => {
      console.log(data);
      drawLineChart(data);
    }).catch(error => {
      console.error("Error loading CSV file:", error);
    });

  const drawLineChart = data => {
    const xScale = d3.scaleLinear()
      .domain(d3.extent(data, d => d.year))
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.averagePrice)])
      .range([innerHeight, 0]);

    const bottomAxis = d3.axisBottom(xScale)
      .tickFormat(d3.format("d"));

    const leftAxis = d3.axisLeft(yScale);

    const areaGenerator = d3.area()
      .x(d => xScale(d.year))
      .y0(innerHeight)
      .y1(d => yScale(d.averagePrice))
      .curve(d3.curveStep);

    innerChart
      .append("path")
      .attr("d", areaGenerator(data))
      .attr("fill", "green")
      .attr("fill-opacity", 0.2);

    const lineGenerator = d3.line()
      .x(d => xScale(d.year))
      .y(d => yScale(d.averagePrice))
      .curve(d3.curveStep);

    innerChart
      .append("path")
      .attr("d", lineGenerator(data))
      .attr("fill", "none")
      .attr("stroke", "green");

    innerChart
      .append("g")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(bottomAxis);

    innerChart
      .append("g")
      .call(leftAxis);

    innerChart
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", 4)
      .attr("cx", d => xScale(d.year))
      .attr("cy", d => yScale(d.averagePrice))
      .attr("fill", "green");

    innerChart
      .append("text")
      .text("Average Price ($ per mWh)")
      .attr("x", -40)
      .attr("y", -30)
      .attr("text-anchor", "start")
      .attr("font-size", "15px")
      .attr("fill", "black");

    const lastPoint = data[data.length - 1];
    innerChart
      .append("text")
      .text("Average Price ($ per mWh)")
      .attr("x", xScale(lastPoint.year) + 12)
      .attr("y", yScale(lastPoint.averagePrice))
      .attr("dominant-baseline", "middle")
      .attr("font-size", "14px")
      .attr("fill", "green");
  };
});