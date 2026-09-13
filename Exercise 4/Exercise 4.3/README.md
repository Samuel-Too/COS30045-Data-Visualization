# Exercise 4.3

---

## Exercise Steps

### Step 2: Create SVG Object Within the New Div

Created and configured the SVG canvas inside the responsive container using D3:

- Selected the container `.responsive-svg-container` and appended an `<svg>` element
- Defined the `viewBox` attribute as `"0 0 1200 1600"` to ensure content scales and positions properly across different window sizes
- Added a temporary `1px solid black` outline to visually confirm the canvas boundaries during browser resizing

### Step 3: Add a Test SVG Rectangle

Appended a hard-coded SVG rectangle to verify canvas coordinate mapping and rendering:

- Appended a `<rect>` primitive to the newly created SVG canvas using D3
- Hard-coded the position attributes to `x="10"` and `y="10"`
- Set dimensions to `width="414"` and `height="16"` with an attribute of `fill="blue"`
- Verified that a long, thin rectangle renders correctly at the top of the canvas before binding dynamic CSV data in subsequent steps

---

## AI Declaration

Artificial Intelligence (AI) tools were used to assist with generating documentation following the unit's standardised README structure.