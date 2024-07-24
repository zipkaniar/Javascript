// Bunlar Web Servislerinden gelecek.

// Built-in : Bir dil içerisinde daha önce tanımlanmış değişkenler,fonksiyonlar,sınıflar.

// Tekerleği Sıfırdan İcat Etme!

// Dizinin Indexi 0 dan başlar!

/* const courses = ["HTML", "CSS", "JS", "React", "Redux", "Python", "Node", "MongoDB", "React Native", "Docker", "Kubernetes", "Python"] */

/* console.log(courses[0])

console.log(courses[courses.length - 1])

console.log(courses.length)


 */

/* console.log(courses.includes("Python"))
console.log(courses.reverse())
// Gördüğü ilk indeksi bulur.
console.log(courses.indexOf("Python"))
// Gördüğü son indeksi bulur.
console.log(courses.lastIndexOf("Python"))
 */


/* if (courses.indexOf("React") === 5) {
    courses[5] = "C++"
} */
/* console.log(courses) */

//console.log(courses)



// Ram üzerinde aB8557546@1587756 adres oluştu.


// Kopyalama
/* const a = [1, 2, 3]
const b = a;
console.log(a === b);


a[0] = 500
console.log("a : ", a)
console.log("b : ", b)


const c = []
const d = []
console.log(c === d)

 */

const courses = ["HTML", "CSS", "JS", "React", "Redux", "Python", "Node", "MongoDB", "React Native", "Docker", "Kubernetes", "Python"]

const upCourses = ["C++", "C#", "C", "Java", "Rust", "Delphi"]

//Diziyi birleştirme
const newCourses = courses.concat(upCourses)
console.log(newCourses)

//Diziyi dilimlere ayırma
const slicedCourses = newCourses.slice(2, 6)
console.log(slicedCourses)

//Dizide arama
const firstIndex = newCourses.indexOf("Python")
console.log(firstIndex)

//
//const splittedCourses = newCourses.split("")

//Diziyi birleştirir ve formata dönüştürme
const joinedArray = newCourses.join(" * ")
console.log(joinedArray)

/* const name = "Abdullah"
console.log(name.split("A")) */

//Diziye eklenen son elemanı çıkarır
newCourses.pop()
//console.log(poppedArray)
console.log(newCourses)

//Diziye eleman ekler.
newCourses.push("Deno")
console.log(newCourses)

//Dizilerdeki filter,reduce ve map fonksiyonları araştırılacak.



//Iteration : Dizi elemanlarını gezmek
const friends = ["Ahmet", "Mehmet", "Veli"]


//Bütün programlama dillerinde var.
console.log("Klasik For: ")
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i])
}

//Built-in gelen özellik.
console.log("Foreach :")
friends.forEach((friend, index) => {
    console.log(friend)
})

//For of yapısı 
console.log("For of :")
for (let friend of friends) {
    console.log(friend)
}


const names = ["Ahmet", "Mehmet", "Veli"]
const name = "Ab*dullah"
console.log(name.split(""))
console.log(names[Math.ceil(Math.random(0, names.length) * names.length - 1)])

//switch case - enum kullanımı


const newNames = names.map((name, index) => {
    return name.toUpperCase() + " " + (index + 1)
})

console.log(newNames)