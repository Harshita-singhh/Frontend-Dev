let expenses = [3000, 1200, 8000, 1500, 2000];
let total = expenses.reduce((a,b)=>a+b,0);
let avg = total/expenses.length;
let finalAmount = total * 1.10;
console.log(total.toFixed(2), avg.toFixed(2), finalAmount.toFixed(2));
