document.addEventListener("DOMContentLoaded", () => {
  const margin = { top: 70, right: 30, bottom: 50, left: 60 };
  const width = 800;
  const height = 450;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const svg = d3.select("#bar-chart")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("font-family", "sans-serif");

  const innerChart = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  d3.csv("assets/data/Data_exercise 5.1-1.csv", d => {
    return {
      Screen_Tech: (d.Screen_Tech || d["\ufeffScreen_Tech"] || "").toUpperCase(),
      Energy_Consumption: +(d["Mean(Labelled energy consumption (kWh/year))"] || d.Energy_Consumption)
    };
  }).then(data => {
    console.log(data);
    console.log(data.length);
    console.log(d3.max(data, d => d.Energy_Consumption));
    console.log(d3.min(data, d => d.Energy_Consumption));

    data.sort((a, b) => b.Energy_Consumption - a.Energy_Consumption);

    drawBarChart(data);
  }).catch(error => {
    console.error("Error loading CSV file:", error);
  });

  const drawBarChart = data => {
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.Screen_Tech))
      .range([0, innerWidth])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.Energy_Consumption)])
      .range([innerHeight, 0]);

    const bottomAxis = d3.axisBottom(xScale);
    const leftAxis = d3.axisLeft(yScale);

    innerChart
      .append("g")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(bottomAxis)
      .selectAll("text")
      .attr("font-size", "14px");

    innerChart
      .append("g")
      .call(leftAxis)
      .selectAll("text")
      .attr("font-size", "11px");

    innerChart
      .append("text")
      .text("Energy Consumption (kWh)")
      .attr("x", -40)
      .attr("y", -35)
      .attr("text-anchor", "start")
      .attr("font-size", "16px");

    innerChart
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("width", xScale.bandwidth())
      .attr("height", d => innerHeight - yScale(d.Energy_Consumption))
      .attr("x", d => xScale(d.Screen_Tech))
      .attr("y", d => yScale(d.Energy_Consumption))
      .attr("fill", "green");

    innerChart
      .selectAll(".bar-label")
      .data(data)
      .join("text")
      .attr("class", "bar-label")
      .attr("x", d => xScale(d.Screen_Tech) + xScale.bandwidth() / 2)
      .attr("y", d => yScale(d.Energy_Consumption) - 8)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .text(d => `${Math.round(d.Energy_Consumption)} kWh`);
  };
});