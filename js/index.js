
//Değişken Tanımlama  var,let,const

//Naming Convention : Isimlendirme Kuralları
// camelCase
//PascalCase
//snake_case
//kebab-case

//1. Değişken rakam ile başlamaz
//2. Değişken büyük isimle başlamaz
//3. Değişken isimleri hareket yada eylem belirtmezler
//4. Değişken isimleri yalnızca harf, rakam ve alt cizgi kullanabilir
//5. Değişkenlerde türkçe karakter kullanılmaz.







// Sabit değişkenler BÜYÜK HARFLE  TANIMLANIR
const PI = 3.14

const HOST = "localhost"
const DB_ADDRESS = "postgres://localhost:5432/abcd"


// camelCase : userAge
let userAge = 28

// snake_case : user_age
let user_age = 23

// kebab-case : user-age
//let user-age = 23;

//console.info(user_age)

// Aritmetik Operatörler

/* let a = 2
let b = 3

const result = a + b

console.log("🚀 ~ file: index.js:47 ~ result:", result) */


/* const incomes = [
    { name: "Kira", value: 15000 },
    { name: "Maaş", value: 80000 },
    { name: "Pasif", value: 10000 }
]

let totalIncome = 0
incomes.forEach((income) => {
    totalIncome += income.value
})


console.log("Kullanıcının Aylık Toplam Geliri : ", totalIncome, ' TL')


const goes = [
    { name: "Elektrik", value: 200 },
    { name: "Su", value: 150 },
    { name: "Dogalgaz", value: 1000 }
]

let totalGoes = 0
goes.forEach((go) => {
    totalGoes += go.value
})
console.log("Kullanıcının Aylık Toplam Harcaması : ", totalGoes, ' TL')


console.log("Kullanıcının Aylık Net Geliri : ", totalIncome - totalGoes, ' TL')



for (let i = 0; i < 10; i++) {
    console.log(i)
}


const ogrenciler = [
    {
        name: "Abdullah", note: 50
    },
    {
        name: "Mehmet", note: 60
    },
    {
        name: "Bahattin", note: 95
    },
    {
        name: "Pınar", note: 80
    }
]

let toplamNotlar = 0
ogrenciler.forEach((ogrenci) => {
    toplamNotlar += ogrenci.note
})
console.log("ortalama : ", toplamNotlar / ogrenciler.length)

const ortalama = (toplamNotlar / ogrenciler.length)

if (ortalama >= 50) {
    console.log("Öğrencilerin durumu iyi")
} else {
    console.log("Öğrencilerin durumu çok kötü")
}



const notlar = [45, 60, 80, 95, 85, 66, 63, 76, 95, 100]



// DİZİLER 0. ELEMANDAN BAŞLAR.
const harfNotlar = ["AA", "AB", "CC", "DD", "FF"]


notlar.forEach((not) => {
    if (not >= 90) {
        console.log("Ögrenci Sınıf Geçti. ", harfNotlar[0])
    } else if (not >= 80) {
        console.log("Ögrenci Sınıf Geçti. ", harfNotlar[1])
    } else if (not >= 70) {
        console.log("Ögrenci Sınıf Geçti. ", harfNotlar[2])
    } else if (not >= 60) {
        console.log("Ögrenci Sınıf Geçti. ", harfNotlar[3])
    } else if (not <= 50) {
        console.log("Ögrenci Sınıfta Kaldı. ", harfNotlar[4])
    }
})

 */

/* const havaDurumu = "Karlı"

switch (havaDurumu) {
    case "Güneşli":
        console.log("Dışarı çık gez bilgisayar başında ne işin var!")
        break
    case "Yagmurlu":
        console.log("Şemsiye ile çık evde oturma da ne yaparsan yap.")
        break
    case "Karlı":
        console.log("Mont giy yine çık.")
        break
    default:
        console.log("Evde bilgisayar başında otur.")
        break
}



let sayac = 0


while (sayac < 10) {
    console.log(sayac)
    sayac++
}


 */


// Fonksiyon Tanımlama
// camelCase
// Fonksiyon isimleri emir bildirir.

function calculateAge(birthYear, currentYear) {
    console.log("Yaşınız : ", currentYear - birthYear)

}

calculateAge(1996, 2024)



//Arrow Function 
const sayYourName = (name) => {
    console.log("Merhaba ", name)
}

sayYourName("Abdullah")

const compareA = (a, b) => {
    return a + b
}

const compareB = (a, b) => a - b



if (compareA(10, 20) === compareB(10, 20)) { }

// Geri Dönüşlü Fonksiyonlar

const sum = (a, b) => {
    return a + b
}
const total = sum(10, 20)
console.log("Toplam : ", total)



var username = "Pınar"

const saveUser = () => {
    username = "Ali"
    console.log(username)
    let age = 28
    console.log(username, age)
}

saveUser()


console.log(username)

///saveUser()



// Fonksiyonlar: Projede çalışan komutlar.


var users = []

function registerUser(name, age, email, password) {
    const user = {
        name,
        age,
        email,
        password
    }
    users.push(user)

}


const name = "Abdullah"

console.log(name.toUpperCase())

const mathFunctions = {
    sum: (a, b) => {
        console.log(a + b)
    },
    multiply: (a, b) => {
        console.log(a * b)
    },
    divide: (a, b) => {
        console.log(a / b)
    },
    subtract: (a, b) => {
        console.log(a - b)
    }

}

mathFunctions.sum(10, 20)







