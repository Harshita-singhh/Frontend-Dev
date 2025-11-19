let salary = 50000;
let increment = 10;
let data = [];

for(let i=1;i<=5;i++){
  salary += salary * (increment/100);
  data.push({Year: i, Salary: Math.round(salary)});
}

console.table(data);
