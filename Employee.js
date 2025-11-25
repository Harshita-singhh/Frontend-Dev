class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is working in ${this.department} department.`;
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    work() {
        return `${this.name} is managing a team of ${this.teamSize} people in ${this.department} department.`;
    }
}

const emp1 = new Employee("John", "IT");
const emp2 = new Employee("Sarah", "HR");
const mgr1 = new Manager("Alice", "IT", 5);
const mgr2 = new Manager("Bob", "Sales", 8);

const employees = [emp1, emp2, mgr1, mgr2];

employees.forEach(employee => {
    console.log(employee.work());
});
