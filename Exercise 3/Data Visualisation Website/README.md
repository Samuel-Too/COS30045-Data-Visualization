# Appliance Energy Consumption Website - Week 3

## Project Overview
This website translates Australian television energy consumption data into clear, audience-targeted web visualisations. Built as part of Swinburne University's Web Data Visualisation unit, the project demonstrates semantic HTML structuring, responsive external CSS design, client-side JavaScript DOM manipulation, and empirical data storytelling.

---

## Data Story: Audience & Framing

### 1. Who is the Audience?
The primary target audience is **Australian household consumers and apartment renters** preparing to purchase a new television. 
* **Key Characteristics:** Everyday consumers who balance upfront purchase price with long-term cost of living. They are familiar with TV sizes in inches (e.g., 55", 65") rather than metric measurements (cm).
* **Technical Proficiency:** Low to moderate data literacy; dense scientific scatterplots can be overwhelming, while clean grouped bar charts and tiered comparisons ("Small, Medium, Large") provide clear utility.

### 2. What Do They Want to Know?
1. **Size Trade-offs:** How much extra electricity will a 65" or 75" TV draw compared to a standard 50" or 55" unit?
2. **Technology Comparisons:** Does buying an OLED panel penalise them on quarterly energy bills compared to standard LED-LCD screens?
3. **Actionable Cost Impact:** Translating abstract technical units ($kWh/year$) into direct Australian dollar estimates on their power bill.

### 3. Storyboard & Presentation Strategy
* **Setting the Scene (The Market Reality):** Present the frequency distribution of screen sizes in centimeters (Histogram), contextualizing why Australian showrooms are dominated by 55" and 65" formats due to industrial mother-glass cutting efficiency.
* **Demonstrating the Core Issue (The Area Trap):** Reveal through scatter plots and discrete inch bar charts how annual energy use scales exponentially rather than linearly, accelerating sharply past 60–65 inches with extreme variances.
* **Simplifying the Choice (Categorical Framework):** Group continuous inches into three intuitive consumer brackets: **Small (<43")**, **Medium (44–65")**, and **Large (>66")**, exposing an approximate 86% cost leap from medium to large screens and an overall ~365% increase from small to large displays.
* **Evaluating the Nuance (Technology Comparison):** Use pivot analysis across panel architectures (LCD, LED-LCD, OLED) to demonstrate that living-room sized OLED displays consume roughly the same power as LED-LCDs, debunking the myth of an OLED energy penalty.
* **Actionable Recommendation (The Verdict):** Provide an explicit buyer's rule-of-thumb pointing consumers to the 55"–65" sweet spot, advising them to inspect raw annual kWh figures rather than star ratings alone.

---

## About the Data

### Data Source
The dataset is drawn from the Australian Government's **Energy Rating Database** (energyrating.gov.au), covering registered television models submitted under the Greenhouse and Energy Minimum Standards (GEMS) Act.

### Data Processing & Transformations (KNIME)
1. **Unit Conversion:** Converted screen diagonals from centimeters to inches using a mathematical expression node (`screensize_inches = screensize_cm / 2.54`) to match standard retail terminology.
2. **String Conversion:** Converted discrete screen sizes from numbers to strings to support discrete bar chart aggregation.
3. **Categorisation:** Binned continuous sizes into three categorical groups using the Expression node:
   * Small: `< 43"`
   * Medium: `44"` to `65"`
   * Large: `> 66"`
4. **Aggregation & Pivoting:** Grouped by `Screen_Tech` and pivoted against `screensize_category`, computing the `mean()` of `Labeled Energy Consumption (kWh/year)`. Mean was selected because energy consumption is a continuous ratio metric, whereas star ratings represent ordinal bins best summarized by medians or distributions.

### Privacy
The dataset contains purely commercial product specifications (model identifiers, wattage, screen dimensions, star ratings). No consumer, household, or personal identifying information (PII) is present.

### Accuracy & Limitations
* **Test Profile Bias:** Labeled energy values reflect standardised testing protocols (e.g., factory preset brightness, 10 hours of active use per day). Actual household consumption varies heavily based on ambient room light, backlighting settings, HDR usage, and daily viewing duration.
* **Data Anomalies:** Histogram binning at 20 cm intervals revealed low-frequency outliers around 150 cm and 175 cm. Inspection of model codes indicates these represent non-standard production batches or frame-inclusive measurements entered during supplier registration.
* **Market Representation:** The dataset reflects models registered for market clearance, meaning discontinued legacy models coexist alongside current-year inventory.

### Ethics
Presenting energy figures clearly is an ethical imperative during cost-of-living and climate pressures. The story avoids misleading truncations of chart axes, highlights the difference between Star Ratings (relative efficiency) and absolute annual kWh draw, and contextualises calculations with transparent tariff baselines (30¢/kWh).

---

## Generative AI Reflection

### 1. Which Tool(s) Were Used
* **ChatGPT / Gemini AI** via interactive prompts.

### 2. What Generative AI Was Used For
* Drafting semantic HTML layout blocks and responsive CSS grid/card styles.
* Structuring the audience-centric narrative guidelines based on Nancy Duarte / Cole Nussbaumer Knaflic data storytelling methodologies.
* Generating unit conversion logic and checking calculation consistency across the interactive energy calculator form.

### 3. What Was Changed or Adapted After Generation
* **Tone & Framing:** Shifted the generated text away from rigid "KNIME node documentation" into an organic, consumer-facing editorial narrative explaining industrial factors like mother-glass panel cuts.
* **Layout & Scoping Adjustments:** Refactored CSS to cleanly scope `.page-intro` elements, resolving color inheritance conflicts from global header tags to guarantee high text contrast and clean borders.
* **DOM Error Handling:** Adjusted generated JavaScript to ensure form validation updates inline `<span>` error elements gracefully without using disruptive window `alert()` dialogs.
* **Chart Accessibility:** Added explanatory figure captions and semantic markup (`<figure>`, `<figcaption>`, `<article>`) to make visual placeholders accessible to assistive devices.

### 4. What Was Learned
* How to balance high-level narrative overviews with technical deep dives, separating the "what" (data charts) from the "so what?" (consumer cost impact).
* How to weave storyboard frameworks organically into editorial web pages without resorting to literal or rigid visual card structures.
* How to use CSS Flexbox and custom properties (variables) to maintain visual consistency across multi-page web applications.

### 5. Limitations & Issues Encountered
* AI initially suggested using star ratings as a direct linear comparison for cost savings. Because star ratings represent comparative efficiency relative to surface area (a large 5-star TV still uses far more energy than a small 2-star TV), this was manually caught and corrected to focus the core story on **mean labeled kWh/year**.