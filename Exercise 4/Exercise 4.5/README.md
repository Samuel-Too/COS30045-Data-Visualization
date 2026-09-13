# Exercise 4.5 – D3 Binding and Drawing with Data

---

## Exercise Steps

### Step 1: Bind the Data to DOM Elements

Used D3's data-join pattern to create SVG rectangles for each data record:

- Created the `drawBarChart(data)` function and selected all rectangles within the canvas using `svg.selectAll("rect")`
- Bound the sorted dataset to the selection using `.data(data)` and added matching rectangles with `.join("rect")`
- Assigned dynamic class names using `.attr("class", d => \`bar bar-${d.count}\`)` so each element reflects its count value in the DOM

### Step 2: Make Your Data Visible: Add Attributes for Width, Height, and Fill

Assigned sizing and visual presentation attributes to render the joined elements:

- Defined a constant `barHeight = 20` to set the height of each bar
- Mapped the bar width directly to the TV count using `.attr("width", d => d.count)`
- Set uniform height and color using `.attr("height", barHeight)` and `.attr("fill", "blue")`
- Verified that before vertical positioning is added, all rectangles stack on top of each other at coordinate `(0, 0)`

### Step 3: Space Out the Bars

Calculated vertical coordinates to space the bars down the canvas:

- Anchored the horizontal start position of all bars to the left edge using `.attr("x", 0)`
- Defined a `barSpacing = 5` constant to maintain consistent gaps between bars
- Applied the formula `.attr("y", (d, i) => i * (barHeight + barSpacing))` to position each bar based on its index `i`
- Verified in the browser that the bars form an ordered horizontal bar chart descending from the highest count to the lowest

---

## AI Declaration

Artificial Intelligence (AI) tools were used to assist with aspects of this exercise:

- Structuring the documentation to adhere to the course's standardised README format.
- Verifying D3 method chaining and array index calculation logic.