document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Footer Year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Accordion Functionality
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const isOpen = header.classList.contains("active");

      // Close all accordions
      document.querySelectorAll(".accordion-header").forEach(h => h.classList.remove("active"));
      document.querySelectorAll(".accordion-content").forEach(c => c.style.maxHeight = null);

      // Toggle clicked item
      if (!isOpen) {
        header.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});