

async function getFilms() {
    return await fetch("https://localhost:7233/Films/Index");
}
function deleteFilm(id) {
    return fetch("https://localhost:7233/Films/Delete/" + id, {
        method: "DELETE"
    });
}

function getCategoriesForSelect(){
    return  fetch("https://localhost:7233/Categories/DetailsWhithOutFilms");
}

function addFilmPost(film) {
    return fetch("https://localhost:7233/Films", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(film)
    })
}
export {getFilms, deleteFilm, getCategoriesForSelect,addFilmPost};