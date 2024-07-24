
/*
const users = [
    {
        name: "Abdullah",
        age: 28,
        gender: 'male',
        employeType: 'developer'
    },

    {
        name: "Mehmet",
        age: 35,
        gender: 'male',
        employeType: 'developer'
    },

    {
        name: "Pınar",
        age: 30,
        gender: 'female',
        employeType: 'manager'
    },
    {
        name: "Gülay",
        age: 30,
        gender: 'female',
        employeType: 'manager'
    },
    {

        name: "Ahmet",
        age: 40,
        gender: 'male',
        employeType: 'driver'

    }
] */
//console.log("Kullanıcılar : ", users)
/* let totalCount = 0

users.forEach((user) => {
    if (user.name.toLowerCase().includes("a")) {
        totalCount++
    }
})
console.log("Toplam isminde a harfi gecen kisi sayisi : ", totalCount)



let totalAge = 0

users.forEach((user) => {
    totalAge += user.age
})

console.log("Toplam yas : ", totalAge)


let totalAvarageAge = 0
users.forEach((user) => {
    totalAvarageAge += user.age
})

console.log("Ortalama yas : ", totalAvarageAge / users.length)



let totalFemale = 0
users.forEach((user) => {
    if (user.gender == "female") {
        totalFemale++
    }
})

let totalMale = 0
users.forEach((user) => {
    if (user.gender == "male") {
        totalMale++
    }
})

console.log("Toplam Kadın Sayısı : ", totalFemale, " Toplam Erkek Sayısı : ", totalMale)


let totalDeveloper = 0
users.forEach((user) => {
    if (user.employeType == "developer") {
        totalDeveloper++
    }
})
console.log("Toplam developer sayısı : ", totalDeveloper)


let totalManager = 0
users.forEach((user) => {
    if (user.employeType == "manager") {
        totalManager++
    }
})
console.log("Toplam manager sayısı : ", totalManager)

let totalDriver = 0
users.forEach((user) => {
    if (user.employeType == "driver") {
        totalDriver++
    }
})

console.log("Toplam driver sayısı : ", totalDriver) */



//Push : Listeye bir eleman ekler.
/* users.push({ name: "Veli", age: 50, gender: 'male', employeType: 'HR' }) */

//Pop : Listedeye eklenen son elemanı siler.
/* users.pop() */

//Filter : Listeyi filtreler. // callback function
/* const filteredUser = users.filter((user) => {
    return user.gender == "female"
})
 */

//Map : Listeyi değiştirir.
/* const mappedUser = users.map((user) => {
    if (user.name === "Mehmet") {
        user.name = "Obama"
    }
    return user

}) */
//console.log(mappedUser)

//console.log("Filtrelenen kisiler : ", filteredUser)

//Sort : Listeyi sıralar.
/* const sortedUsers = users.sort((a, b) => b.name.localeCompare(a.name))
console.log(sortedUsers) */