// products.js

// Define the quantities array
let quantity = [2, "cat", 1.5, -1.5, 0];
//let quantity = [2, 1, 1, 2, 1];

// Define the item objects (minus image data) with brand and quantity attributes
let itemData = [
  {
    brand: 'HTC',
    price: 40,
    quantityIndex: 0, // Use index position to reference the quantity
  },
  {
    brand: 'Apple',
    price: 75.64,
    quantityIndex: 1, // Use index position to reference the quantity
  },
  {
    brand: 'Nokia',
    price: 35.99,
    quantityIndex: 2, // Use index position to reference the quantity
  },
  {
    brand: 'Samsung',
    price: 33.95,
    quantityIndex: 3, // Use index position to reference the quantity
  },
  {
    brand: 'Blackberry',
    price: 35.00,
    quantityIndex: 4, // Use index position to reference the quantity
  },
];

export { itemData, quantity };