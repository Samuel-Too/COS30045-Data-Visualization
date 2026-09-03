# Appliance Energy Consumption Website

## Description
A lightweight interactive website built for the COS30045 Data Visualisation subject. The project demonstrates core HTML page structuring, consistent CSS layout design matching branded assets, vanilla JavaScript DOM manipulation for interactive elements, and an interactive Appliance Energy Calculator.

## Project Structure
- `index.html`: Main landing page with the interactive energy calculator and FAQ section.
- `televisions.html`: Data display page focusing on television display power consumption.
- `about.html`: Contextual information about the project and unit goals.
- `assets/css/styles.css`: External CSS containing site-wide styling and responsiveness.
- `assets/js/main.js`: Core DOM logic handling dynamic date rendering and accordion animations.
- `assets/js/calculator.js`: Client-side JavaScript validation and calculation engine.

## Generative AI Reflection

### Which Tool(s) Used
- ChatGPT (GPT-4) / GitHub Copilot

### What Generative AI Was Used For
- Generating structural HTML templates and boilerplate multi-page navigation layout.
- Assisting with CSS Flexbox alignments and dynamic accordion CSS transitions.
- Providing initial math logic formulas for converting Watts to kWh and calculating monthly cost projections.

### What Was Changed or Adapted
- Enhanced form validation in `calculator.js` to ensure edge cases (e.g., entering negative numbers or hours greater than 24) are handled gracefully with inline feedback rather than alerts.
- Refactored script tags across HTML pages to prevent execution errors when specific form elements are not present on subpages.

### What Was Learned
- Learned how to properly bind event listeners to DOM elements without relying on inline JS handlers.
- Understood the importance of keeping CSS animations pure while letting JavaScript handle class toggles.

### Limitations & Issues Encountered
- Initial AI-generated JavaScript used browser `alert()` popups for form validation, which did not meet the requirement for dynamic inline DOM feedback. This was manually rewritten to inject text inside specific `<span>` tags.