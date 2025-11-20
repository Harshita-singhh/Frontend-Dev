"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

employees.forEach((emp, i) => {
    try {
        if (!emp || typeof emp !== "object") throw new Error("Invalid employee record");
        const { name } = emp;
        if (!name) throw new Error("Missing name");

        const salary = Number(emp.salary);
        const years = Number(emp.years);
        if (Number.isNaN(salary) || Number.isNaN(years)) {
            throw new Error("Salary or years is not a valid number");
        }

        const rate = years > 3 ? 0.1 : 0.05;
        const bonus = salary * rate;

        console.log(
            `${name}: Salary = ${salary.toFixed(2)}, Years = ${years}, Bonus = ${bonus.toFixed(2)} (${(rate * 100)}%)`
        );
    } catch (err) {
        console.error(`Error processing employee #${i + 1}: ${err.message}`);
    }
});