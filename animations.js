let hamButton = document.querySelector(".ham-button");
let nav = document.querySelector(".main-nav")


hamButton.addEventListener("click", function() {
        hamButton.classList.toggle("active");
        nav.classList.toggle("active");
  });

let search = document.querySelector(".search");
let closeSearch = document.querySelector(".close-search");
let searchForm = document.querySelector(".search-form");


document.addEventListener("click", ev => {
    let targetel = ev.target;
    if (targetel.classList.contains("search") || targetel.parentNode.classList.contains("search") ) {
        search.classList.add("active");
        searchForm.classList.add("active");
    };
  });

closeSearch.addEventListener("click", function() {
    search.classList.remove("active");
    searchForm.classList.remove("active");
});
hamButton.addEventListener("click", function() {
    search.classList.remove("active");
    searchForm.classList.remove("active");
});