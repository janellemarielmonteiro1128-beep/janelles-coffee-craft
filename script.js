// 1. Declare const for guide name and current year
const guideName = "Janelle's Coffee Craft";
const currentYear = new Date().getFullYear();

// 2. Declare a let for running count, starting at 0
let totalProductsCount = 0;

// Calculate total coffee items dynamically
const coffeeProducts = ["Caramel Macchiato", "Iced Spanish Latte", "Buttercream Latte"];
totalProductsCount = coffeeProducts.length;

// Wait for DOM content to load safely
document.addEventListener("DOMContentLoaded", () => {
  // 3. Write guide name dynamically into an element
  const guideTitleElement = document.getElementById("guide-title");
  if (guideTitleElement) {
    guideTitleElement.textContent = guideName;
  }

  // 4. Dynamic copyright line in footer
  const footerCopyrightElement = document.getElementById("footer-copyright");
  if (footerCopyrightElement) {
    footerCopyrightElement.textContent = `© ${currentYear} ${guideName}. All rights reserved.`;
  }

  // Small Calculation display: Count of signature drinks
  const reviewCountElement = document.getElementById("review-count");
  if (reviewCountElement) {
    reviewCountElement.textContent = `Featured Menu: ${totalProductsCount} Signature Coffee Drinks`;
  }

  // 5. Console logs with 3 labeled values
  console.log("Guide Name:", guideName);
  console.log("Current Year:", currentYear);
  console.log("Total Products Featured:", totalProductsCount);
});