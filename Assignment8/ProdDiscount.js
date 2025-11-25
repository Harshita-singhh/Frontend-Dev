function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    return this.price - (this.price * percent / 100);
};

const laptop = new Product("Laptop", 1000);
const phone = new Product("Phone", 500);
const tablet = new Product("Tablet", 300);

console.log(`${laptop.name}: $${laptop.price} → $${laptop.applyDiscount(20)}`);
console.log(`${phone.name}: $${phone.price} → $${phone.applyDiscount(15)}`);
console.log(`${tablet.name}: $${tablet.price} → $${tablet.applyDiscount(10)}`);