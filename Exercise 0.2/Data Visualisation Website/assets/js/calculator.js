document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("energy-calculator");
  if (!form) return;

  const applianceSelect = document.getElementById("appliance-select");
  const wattsInput = document.getElementById("power-watts");
  const hoursInput = document.getElementById("hours-per-day");
  const rateInput = document.getElementById("electricity-rate");

  const powerError = document.getElementById("power-error");
  const hoursError = document.getElementById("hours-error");
  const rateError = document.getElementById("rate-error");

  const resultsPanel = document.getElementById("results-panel");

  // Handle Preset Selection
  applianceSelect.addEventListener("change", (e) => {
    const value = e.target.value;
    if (value !== "custom") {
      wattsInput.value = value;
    }
  });

  // Handle Form Submission and Validation
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Reset error messages
    powerError.textContent = "";
    hoursError.textContent = "";
    rateError.textContent = "";

    const watts = parseFloat(wattsInput.value);
    const hours = parseFloat(hoursInput.value);
    const rate = parseFloat(rateInput.value);

    let isValid = true;

    if (isNaN(watts) || watts <= 0) {
      powerError.textContent = "Please enter a valid power value in watts (> 0).";
      isValid = false;
    }

    if (isNaN(hours) || hours <= 0 || hours > 24) {
      hoursError.textContent = "Hours per day must be between 0.1 and 24.";
      isValid = false;
    }

    if (isNaN(rate) || rate <= 0) {
      rateError.textContent = "Please enter a valid electricity rate.";
      isValid = false;
    }

    if (!isValid) return;

    // Calculation Logic
    const dailyKwh = (watts * hours) / 1000;
    const monthlyKwh = dailyKwh * 30.5;
    const yearlyKwh = dailyKwh * 365;

    const rateInDollars = rate / 100;
    const monthlyCost = monthlyKwh * rateInDollars;
    const yearlyCost = yearlyKwh * rateInDollars;

    // Output Results to DOM
    document.getElementById("res-daily-kwh").textContent = dailyKwh.toFixed(2);
    document.getElementById("res-monthly-kwh").textContent = monthlyKwh.toFixed(2);
    document.getElementById("res-yearly-kwh").textContent = yearlyKwh.toFixed(2);
    document.getElementById("res-monthly-cost").textContent = monthlyCost.toFixed(2);
    document.getElementById("res-yearly-cost").textContent = yearlyCost.toFixed(2);

    resultsPanel.classList.remove("hidden");
  });
});