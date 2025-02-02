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
