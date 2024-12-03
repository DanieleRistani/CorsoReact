


 function getCategories() {
    return  fetch('https://localhost:7233/Categories/Index');
} 


 function  getCategoryById(id) {
    return  fetch('https://localhost:7233/Categories/Details/'+id);

}

export {getCategories, getCategoryById}