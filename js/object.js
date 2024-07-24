//Nesne Yönelimli Programlama : Object Oriented Programming
//Class Base Object Oriented Programming
// Prototype Based Object Oriented Programming



//this keyword
/* const employee = {


    name: "Abdullah",
    position: "Developer",
    age: 28,
    city: "Istanbul",
    marriageStatus: true,
    printUserInfo: function () {
        console.log("User Name : ", this.name, "User Position : ", this.position, "User Age : ", this.age, "User City : ", this.city, "User Marriage Status : ", this.marriageStatus)
    },
    isAvailableForApart: function () {
        if (this.marriageStatus == true) {
            console.log("User is available for an apartment")
        } else {
            console.log("User is not available for an apartment")
        }
    }
}
employee.printUserInfo()
employee.isAvailableForApart()


//call ve apply
function greet(greeting) {
    console.log(greeting + " " + this.name)
}
const person = {
    name: "Abdullah"
}
//implied binding
greet.call(person, "Merhaba", "!")


//apply
function sayDeveloperLanguages(username, programmingLanguages) {
    console.log(this.name + " " + this.language)
    console.log(username, programmingLanguages)
}
const developer = {
    name: "Abdullah",
    language: "Javascript"
}
sayDeveloperLanguages.apply(developer, ["Abdullah", ["Javascript", "HTML", "CSS"]])

//bind

//two way binding

const animal = {
    name: "Lion",
}

//bind bağlamak
//Modüler Javascript
function printAnimalName(greeting) {
    console.log(greeting + " " + this.name)
}
const animalGreeter = printAnimalName.bind(animal)

animalGreeter("Hello")

 */