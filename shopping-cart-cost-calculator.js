// Define Variables:
// Variables are defined for the price and quantity of books and T-shirts, tax rate, and shipping fee
const booksPrice = 15; // Price of each book
const booksQuantity = 2; // Quantity of books purchased
const tshirtPrice = 10; // Price of each T-shirt
const tshirtQuantity = 1; // Quantity of T-shirts purchased

const taxRate = 0.08; // Tax rate (8%)
const shippingFee = 5; // Fixed shipping fee


// Calculate Subtotal
// The subtotal cost of all items before tax and shipping is calculated by multiplying the price by the quantity for both books and T-shirts and then summing them up
const booksSubtotal = booksPrice * booksQuantity;
const tshirtSubtotal = tshirtPrice * tshirtQuantity;
const subtotal = booksSubtotal + tshirtSubtotal;

// Calculate Tax Amount:
// The tax amount is calculated by multiplying the subtotal by the tax rate
const taxAmount = subtotal * taxRate;

// Calculate Total Cost:
// The total cost is calculated by combining the subtotal, tax amount, and shipping fee
const totalCost = subtotal + taxAmount + shippingFee;
 // const can be changed in the future with let if prices need changing.


// Display Total Cost:
// The final total cost is displayed using console.log()
console.log(totalCost);