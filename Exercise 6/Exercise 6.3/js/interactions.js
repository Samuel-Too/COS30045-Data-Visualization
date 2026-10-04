let activeScreenTech = "all";
let activeScreenSize = "all";

const populateFilters = (data) => {
  d3.select("#filters_screen")
    .selectAll(".filter")
    .data(filters_screen)
    .join("button")
    .attr("class", d => `filter ${d.isActive ? "active" : ""}`)
    .text(d => d.label)
    .on("click", (e, d) => {
      console.log("Clicked filter:", e);
      console.log("Clicked filter data:", d);

      if (!d.isActive) {
        filters_screen.forEach(filter => {
          filter.isActive = d.id === filter.id ? true : false;
        });

        d3.selectAll("#filters_screen .filter")
          .classed("active", filter => filter.id === d.id ? true : false);

        activeScreenTech = d.id;
        updateHistogram(data);
      }
    });

  d3.select("#filters_size")
    .selectAll(".filter")
    .data(filters_size)
    .join("button")
    .attr("class", d => `filter ${d.isActive ? "active" : ""}`)
    .text(d => d.label)
    .on("click", (e, d) => {
      console.log("Clicked filter:", e);
      console.log("Clicked filter data:", d);

      if (!d.isActive) {
        filters_size.forEach(filter => {
          filter.isActive = d.id === filter.id ? true : false;
        });

        d3.selectAll("#filters_size .filter")
          .classed("active", filter => filter.id === d.id ? true : false);

        activeScreenSize = d.id;
        updateHistogram(data);
      }
    });

  const updateHistogram = (data) => {
    let updatedData = data;

    if (activeScreenTech !== "all") {
      updatedData = updatedData.filter(tv => tv.screenTech === activeScreenTech);
    }

    if (activeScreenSize !== "all") {
      updatedData = updatedData.filter(tv => tv.screenSize === +activeScreenSize);
    }

    const updatedBins = binGenerator(updatedData);

    d3.selectAll("#histogram rect")
      .data(updatedBins)
      .transition()
      .duration(500)
      .ease(d3.easeCubicInOut)
      .attr("y", d => yScale(d.length))
      .attr("height", d => innerHeight - yScale(d.length));
  };
};

const createTooltip = () => {};

const handleMouseEvents = () => {};