# Exercise 4.1

---

## Exercise Steps

### Step 1: Create a picture with SVG shapes (`step1.html`)

An initial drawing of a house and garden created using basic SVG primitives without grouping elements or extra decorative details:

- **`<rect>`**: Forms the sky canvas, lawn ground plane, house base, door, and tree trunk
- **`<circle>`**: Renders the sun and door handle
- **`<polygon>`**: Creates the triangular pitched roof using coordinate points
- **`<line>`**: Forms the individual window mullions and crossbars
- **`<polyline>`**: Draws the background hills using connected line segments
- **`<ellipse>`**: Renders the rounded tree foliage
- **`<text>`**: Displays a label at the bottom of the canvas

### Step 2: Become familiar with the SVG coordinate system

![Step 2 Example](<Step 2 Example.jpg>)

- **Origin `(0,0)`**: Located at the **top-left corner** of the SVG container
- **X-axis**: Extends horizontally to the **right** as values increase
- **Y-axis**: Extends vertically **downward** as values increase (inverted compared to traditional Cartesian graphs)
- **Shape Anchors**:
  - `<rect>` is placed using its top-left corner (`x`, `y`)
  - `<circle>` and `<ellipse>` are centered using (`cx`, `cy`)
  - `<line>` is defined from start point (`x1`, `y1`) to end point (`x2`, `y2`)
  - `<polygon>` connects ordered coordinate vertices (`points="x1,y1 x2,y2 ..."`)

### Step 3: Customise your picture (`step3.html`)

Building upon the basic shapes, additional details and styling rules were added:

- Added a brick chimney (`<rect>`) with dashed smoke trails (`<polyline>` using `stroke-dasharray`)
- Added a perspective walkway leading to the entrance (`<polygon>`)
- Created a decorative picket fence using evenly spaced `<line>` elements
- Adjusted fill colours, stroke widths, and rounded stroke caps (`stroke-linecap="round"`)

### Step 4: Become familiar with the group element (`step4.html`)

Refactored the house windows to demonstrate the use of the **group element `<g>`** and **coordinate transformations**:

- Both windows are wrapped in a parent `<g id="windows">` element, allowing shared styling (`fill`, `stroke`, `stroke-width`) to be inherited uniformly
- The second window reuses the base structure of the first window and is positioned using `transform="translate(140, 0)"`
- This shifts the local coordinate origin without needing to manually recalculate each point

---

## AI Declaration

Artificial Intelligence (AI) assistance was used to draft the initial SVG markup layout and baseline coordinate points for the primitive shapes for Step 1 of this exercise.