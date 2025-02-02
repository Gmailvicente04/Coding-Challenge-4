//Task 1 

let purchaseAmount = 120; // Set the purchase amount

if (purchaseAmount > 100) {
    let discount = purchaseAmount * 0.1; // 10% discount
    purchaseAmount -= discount; // Apply discount
}

console.log(`Final amount after discount: $${purchaseAmount.toFixed(2)}`);