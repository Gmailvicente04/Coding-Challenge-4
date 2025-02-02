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