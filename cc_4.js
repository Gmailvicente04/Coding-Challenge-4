//Task 1 

let purchaseAmount = 120; // Set the purchase amount

if (purchaseAmount > 100) {
    let discount = purchaseAmount * 0.1; // 10% discount
    purchaseAmount -= discount; // Apply discount
}

console.log(`Final amount after discount: $${purchaseAmount.toFixed(2)}`);

// Task 2
let sales = [120, 85, 200, 150, 90]; // Sales figures
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]; // Add each sale to total
}

console.log(`Total sales: $${totalSales}`);


// Task 3 \: Inventory Depletion
let stock = 7; // Initial stock

while (stock > 0) {
    console.log(`Stock remaining: ${stock}`);
    stock--; // Decrease stock
}

console.log("Stock depleted.");

// Task 4 Customer Survey
let responses = 0;

do {
    responses++; // Simulating a user response
    console.log(`Collected responses: ${responses}`);
} while (responses < 3);

console.log("Survey complete.");

// Task 5: Employee Information
let employee = {
    name: "Arturo Vidal", // Employee name
    position: "Manager",  // Employee position
    salary: 70000
};

for (let key in employee) { // Loop through object keys
    console.log(`${key}: ${employee[key]}`); 
}

// Task 6:Product Listings
let products = ["Johnnie Walker", "Jack Daniels", "Macallan", "Chivas Regal"]; // Product list

for (let product of products) { // Loop through products
    console.log(`Product: ${product}`); 
}

// Task 7: Order Processing
let orders = [111, 112, 113];

orders.forEach(order => {
    console.log(`Order ID: ${order}`);
});

// Task 8: Tax Calculation
// Function to calculate tax based on amount and tax rate
function calculateTax(amount, taxRate) {
    return amount * taxRate; // Return the calculated tax
}

let amount = 400; // Sample amount
let taxRate = 0.12; // Sample tax rate (12%)

// Calculate tax and log the result using a template literal
let tax = calculateTax(amount, taxRate);
console.log(`Tax for $${amount} at a rate of ${taxRate * 100}% is: $${tax.toFixed(2)}`);


// Task 9: Discount Application
// Declare the function expression applyDiscount
const applyDiscount = function(price, discountPercentage) {
    return price - (price * (discountPercentage / 100)); // Calculate discounted price
};

let price = 120; // Sample price
let discountPercentage = 19; // Sample discount percentage (19%)

let discountedPrice = applyDiscount(price, discountPercentage);
console.log(`The price after applying a ${discountPercentage}% discount is: $${discountedPrice.toFixed(2)}`);


// Task 10: Loyalty Points
// Arrow function to calculate loyalty points earned (1 point per $10)
const calculatePoints = (purchaseAmount) => {
    return Math.floor(purchaseAmount / 10); // Return points earned (1 point per $10)
};

let purchaseAmountForPoints = 170; // Sample purchase amount
let points = calculatePoints(purchaseAmountForPoints);
console.log(`Points earned for a purchase of $${purchaseAmountForPoints}: ${points} points`);