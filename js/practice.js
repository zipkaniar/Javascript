const calculator = {

    a: 5,
    b: 10,
    add: function (a, b) {
    },
    multiple: function (a, b) {
    }
}

function division() {
    console.log(this.a / this.b)
}
division.call(calculator)
const company = {
    employees: [{
        name: "Abdullah",
        age: 25,
        gender: "male",
    }, {
        name: "Mehmet",
        age: 35,
        gender: "male",
    }, {
        name: "Pınar",
        age: 30,
        gender: "female",
    }]
}
function printEmployee() {
    console.log(this.employees)
}
// Conditional binding
if (company.employees.length > 0) {
    printEmployee.call(company, "merhaba", "!")
}
//this, call , apply,bind araştırılacak.
const animal = {
    name: "Tiger",
}
function printAnimal(...habitats) {
    console.log(this.name)
    console.log("Habitats : ", habitats)
}

printAnimal.apply(animal, [], [])





const user = {
    name: "Abdullah",
    age: 25,
    gender: "male",
    city: "Istanbul",
}

console.log(Object.keys(user))

for (const key in user) {
    console.log(key, user[key])
}