import products from "./products";

const productName: string = "tote bag";
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "Some Address, Manchester";

const product = products.filter((product) => {
  return product.name === productName;
})[0];

if (product.preOrder) {
  console.log("We will send you a message when your product is on the way");
}

if (Number(product.price) > 25) {
  console.log("The Shipping for this product is free!");
  shipping = 0;
} else {
  shipping = 5;
}

if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

// console.log(productName, shippingAddress, product.price, taxTotal,shipping, total)
console.log(
  `Product: ${productName} \nAddress: ${shippingAddress} \nItem Price: £${product.price} \nTax: £${taxTotal} \nShipping: £${shipping} \nTotal: £${total}`
);
