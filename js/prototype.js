const user = {
    name: "Abdullah",
    sayName: function () {
        console.log(this.name)
    }
}

user.sayName()

function greet(greeting) {
    console.log(greeting + " " + this.name)
}
const person = { name: "Abdullah" }
//birinci parametre this yerine geçecek, ikinci parametre ise fonksiyonun parametresi
greet.call(person, "Merhaba")




//apply : Fonksiyonun parametresini dizi olarak verir.
function sayUserName(greeting, punctuation) {
    console.log(greeting + " " + this.name + punctuation)
}
const employee = { name: "Abdullah" }
sayUserName.apply(employee, ["Merhaba", "!"])




//bind : bir fonksiyon yada objeyi başka bir fonksiyon yada objeye bağlamamızı sağlar. Ve geriye yeni değeri döner.
const userGreeter = {
    name: "Abdullah",
}
function adminGreeter(greeting) {
    console.log(greeting + " " + this.name)
}
const newGreeter = adminGreeter.bind(userGreeter)
newGreeter("Merhaba")