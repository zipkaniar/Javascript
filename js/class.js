/* // Class : Yazdığımız kodları günlük hayattaki yaşanan sorunlara göre somutlaştırmak

// attribute,property,field


const person = {

    name: "Abdullah",
    age: 28,
}

// kullanici_adi_sifre, email_şifre,telefon_şifre,
class KullanciDogrulama {
    static veritabaniAdi = "Postgres"
    static veritabaniAdresi = "localhost"
    static veritabaniSifresi = "1234"

    #metot

    constructor(metot) {
        this.metot = metot
    }

    // Getter,Setter
    // Encapsulation
    get metot() {
        return this.#metot
    }

    set metot(metot) {
        try {

            if (metot == "kullanici_adi_sifre") {
                this.#metot = metot
            } else if (metot == "email_sifre") {
                this.#metot = metot
            } else if (metot == "telefon_sifre") {
                this.#metot = metot
            } else {
                throw new Error("Hatalı metot")
            }
        } catch (error) {
            console.log(error)
        }
        this.#metot = metot
    }


    // Metotlar
    static girisYap(metot, params) {
        if (metot === "kullanici_adi_sifre") {
            console.info("Kullanıcı adı ve sifre dogrulandi", params)
        } else if (metot === "email_sifre") {
            console.info("Email ve sifre dogrulandi", params)
        } else if (metot === "telefon_sifre") {
            console.info("Telefon ve sifre dogrulandi", params)
        }
    }
}


const kullaniciDogrula = new KullanciDogrulama("kullanici_adi_sifre")


kullaniciDogrula.metot = "email_sifre"


KullanciDogrulama.girisYap(kullaniciDogrula.metot, {
    email: "abdullahsevmez@gmail.com",
    password: "1234"
})

console.log(kullaniciDogrula.metot)
console.log(KullanciDogrulama.veritabaniSifresi) */

// Miras Alma - Inheritance
// Polymorphism - Coklu Overloading
// Encapsulation - Kapsülleme
// Abstraction - Soyutlama
// Interface - Arayüz


/* class Hero {
    constructor({ name = "hero", xp = 0 } = {}) {
        this.name = name
        this.xp = xp
    }
    gainExp(amount) {
        this.xp += amount
    }
}
class Warrior extends Hero {
    constructor({ weapon, ...rest }) {
        super(rest)
        this.weapon = weapon
    }
    attack() {
        console.log(`${this.name} attacks with ${this.weapon}`)
    }
}

class Wizard extends Hero {
    constructor({ magic, ...rest }) {
        super(rest)
        this.magic = magic
    }
    cast() {
        console.log(`${this.name} casts ${this.magic}`)
    }
}

// Don't Repeat Yourself (DRY)
const ciguli = new Wizard({ name: "Ciguli", magic: "Binnaz" })

const abdullah = new Warrior({ name: "Abdullah", weapon: "Katana" })

abdullah.attack()

abdullah.gainExp(84)

ciguli.cast() */

/* class BlogUser {
    constructor({ name, age, numberOfPosts, topics }) {
        this.name = name
        this.age = age
        this.numberOfPosts = numberOfPosts
        this.topics = topics
    }

    getUserInfo() {
        return {
            name: this.name,
            age: this.age,
            topics: this.topics,
            numberOfPosts: this.numberOfPosts
        }
    }

    addPost() {
        this.numberOfPosts += 1
    }

    removePost() {
        this.numberOfPosts -= 1
    }

}



const razanBlogger = new BlogUser({
    name: "Razan",
    age: 28,
    numberOfPosts: 10,
    topics: ["JavaScript", "CSS", "HTML"]
})
console.info(razanBlogger.getUserInfo())

razanBlogger.addPost()
console.info(razanBlogger.getUserInfo()) */



// Meyve Kasası
/* class Storage {
    constructor(fruits) {
        this.fruits = fruits
    }

    getFruits() {
        return this.fruits
    }
    addFruit(fruit) {
        this.fruits.push(fruit)
    }

    removeFruit(fruit) {
        const newArr = this.fruits.filter((item) => {
            return item.name !== fruit.name
        })
        this.fruits = newArr
    }

} */

/* const storage = new Storage([{
    name: "Apple",
    price: 10,
    quantity: 5,
    symbol: '🍎'
},
{
    name: "Orange",
    price: 15,
    quantity: 10,
    symbol: '🍊'
},
{
    name: "Banana",
    price: 5,
    quantity: 20,
    symbol: '🍌'
}
])


storage.addFruit({
    name: "Watermelon",
    price: 20,
    quantity: 15,
    symbol: '🍉'
})



storage.removeFruit({
    name: "Banana",
    price: 5,
    quantity: 20,
    symbol: '🍌'
})

console.log(storage.getFruits())

 */



const items = [
    { name: "Apple", price: 10, quantity: 5, symbol: "🍎" },
    { name: "Orange", price: 15, quantity: 10, symbol: "🍊" },
    { name: "Banana", price: 5, quantity: 20, symbol: "🍌" }
]


const totalPrice = items.reduce((acc, item) => {
    return acc + item.price
}, 0)

console.log(totalPrice)


let toplamFiyat = 0
items.forEach((item) => {
    toplamFiyat += item.price
})
console.log(toplamFiyat)