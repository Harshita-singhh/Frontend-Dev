let total = 7500;
let d = total >= 10000 ? 25 : total >= 5000 ? 15 : total >= 2000 ? 5 : 0;
let final = Math.round(total - (total * d / 100));
console.log(total, d + "%", final);
