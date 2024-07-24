
//function keyword ile tanımlanır.
//Function Definitons
/* function add(birinciSayi, ikinciSayi) {

    console.log("Toplam : ", birinciSayi + ikinciSayi)

} */

//Function Execution - Function Call
/* add(5, 10)
console.log("Global Scope Level 1") */
// Reusable Code - Clean Code
/* function saveUserToken(token) {
    localStorage.setItem("token", token)
    //console.log(token)
}


saveUserToken("Bcyaklal123712831723as12361728356789018jkhjkahjkahjk") */


/* function topla() {
    // console.log(arguments)
    const args = Array.from(arguments)

    let toplam = 0
    args.forEach((arg) => {
        toplam += arg
    })
    console.log("Toplam : ", toplam)

}


topla(1, 2, 3, 4, 36)

//Doğrudan arrow function ile çalışmaz. Function keyword ile tanımlanır.
const cikart = function () {
    const args = Array.from(arguments)

    let cikarmaSonucu = 0
    args.forEach((number) => {
        cikarmaSonucu -= number
    })
    return cikarmaSonucu
}

const sonuc = cikart(1, 2, 3, 4, 36)
console.log(sonuc)





function ortalamaHesapla() {
    const args = Array.from(arguments)
    let toplam = 0
    args.forEach((number) => {
        toplam += number
    })

    return toplam / args.length
}

const ortalama = ortalamaHesapla(1, 2, 3, 4, 36)
console.log(ortalama) */



/* const TIMEOUT_TIME = 1000
const date = new Date()



function checkTimeOut() {
    console.log("Date", date)
    console.log("Timeout", TIMEOUT_TIME)
}



checkTimeOut();
 */


//Stack Functions

/*
function fnA() {
    console.log("A Fonksiyonu")
}


function fnB() {
    console.log("B Fonksiyonu")
}


function fnC() {
    console.log("C Fonksiyonu")
}
//Javascript,Python - Interpreter
// Java,C# - Compiler

fnA()
fnB()
fnC()
 */


//Obje Kavramı
/* const student = {
    name: "Abdullah",
    age: 28,
    gender: "male",
    city: "Istanbul",
    language: "Turkish",
    isMarried: true,// Boolean true/false
    programmingLanguages: ["Kotlin", "Typescript", "Java", "C#", "Javascript", "Python", "Dart", "Shell"]
}

// Key - Value


console.log("Öğrencinin Adı : ", student.name)
console.log("Öğrencinin Cinsiyet : ", student.gender)
student.age = 30

console.log("Öğrencinin yas : ", student.age)

console.log("Öğrencinin bildiği programlama diller : ", student.programmingLanguages) */

const birinciSayi = prompt("Birinci sayı giriniz : ")
const ikinciSayi = prompt("İkinci sayı giriniz : ")

sayilariTopla(birinciSayi, ikinciSayi)

function sayilariTopla(a, b) {
    alert(`A : ${a} B : ${b} Toplam : ${parseInt(a) + parseInt(b)}`)
}