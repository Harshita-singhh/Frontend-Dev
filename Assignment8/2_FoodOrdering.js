const menuItems = {
    burger: 8.99,
    pizza: 12.99,
    pasta: 10.50,
    salad: 7.25,
    drink: 2.99
};

function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            if (!menuItems[item]) {
                throw new Error(`Invalid item: "${item}" not found in menu`);
            }
            return menuItems[item];
        });

        const total = prices.reduce((sum, price) => sum + price, 0);
        return parseFloat(total.toFixed(2));
    } catch (error) {
        console.error(`Bill calculation failed: ${error.message}`);
        throw error;
    }
}

try {
    console.log(calculateBill(['burger', 'pizza', 'drink']));
    console.log(calculateBill(['burger', 'invalid', 'salad']));
} catch (error) {
    console.error(`Unable to process order: ${error.message}`);
}