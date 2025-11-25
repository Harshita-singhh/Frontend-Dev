export default class Student {
    constructor(id, name, age, grades = []) {
        this.id = id
        this.name = name
        this.age = age
        this.grades = Array.isArray(grades) ? grades.slice() : []
    }
    addGrade(g) {
        if (typeof g === 'number' && !Number.isNaN(g)) this.grades.push(g)
    }
    average() {
        if (this.grades.length === 0) return 0
        return this.grades.reduce((s, v) => s + v, 0) / this.grades.length
    }
    highest() {
        return this.grades.length === 0 ? null : Math.max(...this.grades)
    }
    lowest() {
        return this.grades.length === 0 ? null : Math.min(...this.grades)
    }
    toJSON() {
        return { id: this.id, name: this.name, age: this.age, grades: this.grades.slice() }
    }
    static from(obj) {
        return new Student(obj?.id ?? null, obj?.name ?? '', obj?.age ?? null, obj?.grades ?? [])
    }
}