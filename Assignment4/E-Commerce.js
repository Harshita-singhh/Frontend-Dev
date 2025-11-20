class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = Number(price);
        this.category = category;
    }

    applyDiscount(percent = 10) {
        this.price = Number((this.price * (1 - percent / 100)).toFixed(2));
    }

    displayDetails() {
        return `ID: ${this.id} | ${this.name} (${this.category}) - $${this.price}`;
    }
}

const products = [
    new Product(1, 'Laptop Pro', 1500, 'Electronics'),
    new Product(2, 'Wireless Mouse', 25, 'Accessories'),
    new Product(3, 'Office Chair', 1200, 'Furniture'),
    new Product(4, 'Noise-Canceling Headphones', 999.99, 'Electronics'),
    new Product(5, '4K Monitor', 5000, 'Electronics'),
    new Product(6, 'Smartphone', 1050, 'Electronics')
];

const productToDiscount = products.find(p => p.id === 1);
if (productToDiscount) productToDiscount.applyDiscount(10);
const expensiveProducts = products.filter(p => p.price > 1000);
expensiveProducts.forEach(p => console.log(p.displayDetails()));