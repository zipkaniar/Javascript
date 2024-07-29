let films = []

const filmForm = document.getElementById("film-form")
const filmTitleInput = document.getElementById("film-title")
const filmDirectorInput = document.getElementById("film-director")
const filmPosterInput = document.getElementById("film-poster")
const filmList = document.getElementById("film-list")



filmForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const title = filmTitleInput.value;
    const director = filmDirectorInput.value;
    const poster = filmPosterInput.value;

    if (title && director && poster) {
        //add film fonksiyonu gelecek
        addFilm(title, director, poster)
        filmTitleInput.value = "";
        filmDirectorInput.value = "";
        filmPosterInput.value = "";
        renderFilms();
        console.log(films)
    }

})

/**
 * Adds a new film to the list of films.
 *
 * @param {string} title - The title of the film.
 * @param {string} director - The director of the film.
 * @param {string} poster - The URL of the film's poster.
 * @return {void} This function does not return anything.
 */
function addFilm(title, director, poster) {
    films.push({ title, director, poster });
}


function renderFilms() {
    filmList.innerHTML = ""
    films.forEach((film, index) => {
        const li = document.createElement("li")
        const img = document.createElement("img")
        img.src = film.poster
        img.alt = `${film.title} poster`
        const filmInfo = document.createElement("div")
        filmInfo.textContent = `${film.title} - ${film.director}`

        li.appendChild(img)
        li.appendChild(filmInfo)

        li.appendChild(createUpdateButton(index))
        li.appendChild(createDeleteButton(index))

        filmList.appendChild(li)

    })
}

function createUpdateButton(index) {

    const updateButton = document.createElement("button")
    updateButton.textContent = "Güncelle"
    updateButton.addEventListener('click', () => updateFilm(index))
    return updateButton

}

function createDeleteButton(index) {
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Sil"
    deleteButton.addEventListener('click', () => deleteFilm(index))
    return deleteButton
}

function updateFilm(index) {
    const newTitle = prompt('Yeni Film Başlığı', films[index].title)
    const newDirector = prompt('Yeni Yönetmen Adı', films[index].director)
    const newPoster = prompt("Yeni Poster Bilgisi", films[index].poster)

    if (newTitle && newDirector && newPoster) {
        films[index].title = newTitle
        films[index].director = newDirector
        films[index].poster = newPoster
        renderFilms()
    }
}

function deleteFilm(index) {
    films.splice(index, 1);
    renderFilms()
}

renderFilms()




