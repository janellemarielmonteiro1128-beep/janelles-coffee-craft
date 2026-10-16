// 1. Declare const for guide name and current year
const guideName = "Janelle's Coffee Craft";
const currentYear = new Date().getFullYear();

// 2. Declare a let for running count, starting at 0
let totalProductsCount = 0;

// Calculate total coffee items dynamically
const coffeeProducts = ["Caramel Macchiato", "Iced Spanish Latte", "Buttercream Latte"];
totalProductsCount = coffeeProducts.length;

// --- ACTIVITY 8.4: SHOP DECISION VARIABLES ---
const stockCount = Number(12);       // Stock count for a product
const orderSubtotal = Number(600);   // Order subtotal amount
const isMember = true;               // Member status boolean
const isShopOpen = true;             // Shop open status boolean

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

  // --- ACTIVITY 8.4: DECISION LOGIC & DOM OUTPUTS ---

  // 1. Stock status (if / else if / else chain)
  let stockMessage = "";
  if (stockCount > 10) {
    stockMessage = "In stock";
  } else if (stockCount >= 1 && stockCount <= 10) {
    stockMessage = "Only a few left";
  } else {
    stockMessage = "Sold out";
  }

  const stockElement = document.getElementById("stock-status");
  if (stockElement) {
    stockElement.textContent = `Stock Status (${stockCount} units): ${stockMessage}`;
  }

  // 2. Free delivery check (&& and ternary with strict equality)
  const deliveryFee = (orderSubtotal >= 500 && isMember === true) ? 0 : 150;
  const finalOrderTotal = orderSubtotal + deliveryFee;

  const deliveryElement = document.getElementById("delivery-check");
  if (deliveryElement) {
    deliveryElement.textContent = `Delivery Fee: ₱${deliveryFee} | Final Total: ₱${finalOrderTotal}`;
  }

  // 3. Shop open or closed (boolean and ternary with strict equality)
  const shopStatusMessage = (isShopOpen === true) ? "Open today" : "Closed today";

  const statusElement = document.getElementById("shop-status-note");
  if (statusElement) {
    statusElement.textContent = `Store Status: ${shopStatusMessage}`;
  }

  // 5. Console logs with labeled values
  console.log("Guide Name:", guideName);
  console.log("Current Year:", currentYear);
  console.log("Total Products Featured:", totalProductsCount);
  console.log("Stock Status:", stockMessage);
  console.log("Delivery Fee:", deliveryFee);
  console.log("Store Status:", shopStatusMessage);
});