# Exercise 4.6 & 4.7 – Scaling Charts and Adding Labels

---

## Exercise Steps

### Part 1: Scaling Charts (Exercise 4.6)

#### Step 1: Add Linear Scale for Count Data
- Configured a reduced SVG canvas with `viewBox="0 0 500 500"` to simulate a constrained layout where counts (>1000) overflow raw pixel widths.
- Declared a continuous linear scale `xScale` using `d3.scaleLinear()`.
- Defined the input `.domain([0, 1100])` to encompass the maximum data count (Samsung at 1096) with headroom.
- Set the output range to map normalized data points onto available horizontal canvas pixels.

#### Step 2: Use Linear Scale to Calculate Bar Widths
- Updated the rectangle width mapping from raw counts (`.attr("width", d => d.count)`) to scaled dimensions (`.attr("width", d => xScale(d.count))`).
- Verified that all bars fit within the SVG canvas boundaries without overflowing the right edge.

#### Step 3: Use a Band Scale to Calculate Bar Thickness and Spacing
- Replaced manual coordinate formulas with a discrete band scale `yScale = d3.scaleBand()`.
- Mapped all categorical brand strings to the domain using `data.map(d => d.brand)` over the vertical range `[0, 500]`.
- Added `.padding(0.1)` to create a 10% proportional gap between bars.
- Applied dynamic thickness with `.attr("height", yScale.bandwidth())` and positioned each bar vertically using `.attr("y", d => yScale(d.brand))`.
- Removed obsolete `barHeight` and `barSpacing` constants.

---

### Part 2: Adding Labels (Exercise 4.7)

#### Step 1: Make Room for Labels
- Adjusted the rectangle starting position from `x = 0` to `x = 100` to create a 100-pixel left margin for brand names.
- Adjusted the `xScale` output range to `[0, 360]` so that the 100 px left margin, the maximum bar width, and the trailing numeric labels all fit inside the 500 px viewport without clipping.

#### Step 2: Create a Group Container for Bars and Labels
- Refactored the D3 data join from selecting raw rectangles to selecting SVG groups: `svg.selectAll("g").data(data).join("g")`.
- Applied vertical translation to each group using `.attr("transform", d => \`translate(0, ${yScale(d.brand)})\`)`.
- Ensured that child elements (bars and text) nested inside each group inherit this vertical band position automatically.

#### Step 3: Add Back the Rectangles
- Appended `<rect>` elements inside each translated group container via `barAndLabel.append("rect")`.
- Assigned dimensions using `.attr("width", d => xScale(d.count))` and `.attr("height", yScale.bandwidth())`.
- Set `.attr("y", 0)` to prevent duplicate vertical offsetting since vertical placement is controlled by the parent `<g>`.

#### Step 4: Add the Column Category Text
- Appended brand name labels inside each group with `barAndLabel.append("text").text(d => d.brand)`.
- Positioned labels at `.attr("x", 90)` and applied `.attr("text-anchor", "end")` for clean right-alignment along the left margin.
- Adjusted the baseline to `.attr("y", 15)` to center the text vertically with the bar.

#### Step 5: Add the Value Number
- Appended a second `<text>` element inside each group displaying `.text(d => d.count)`.
- Positioned the value label immediately to the right of each bar using `.attr("x", d => 100 + xScale(d.count) + 4)`.
- Set the vertical baseline to `.attr("y", 12)` with a 13 px font size to display exact model counts.

---

## AI Declaration

Artificial Intelligence (AI) tools were used to assist with aspects of this exercise:

- Calculating scale range limits to accommodate margins and trailing labels within the SVG bounding box.
- Reviewing D3 group selection hierarchy, coordinate translation syntax, and text-anchoring rules.
- Structuring the documentation to adhere to the course's standardised README format.