let hamButton = document.querySelector(".ham-button");
let nav = document.querySelector(".main-nav")

//ouvre nav
hamButton.addEventListener("click", function() {
        hamButton.classList.toggle("active");
        nav.classList.toggle("active");
  });

let search = document.querySelector(".search");
let closeSearch = document.querySelector(".close-search");
let searchForm = document.querySelector(".search-form");
let more = document.querySelector(".more");
let activity = document.querySelectorAll(".activity")

//ouvre search
search.addEventListener("click", ev => {
        search.classList.add("active");
  });


//ferme search
document.querySelector(".close-search").addEventListener("click", function(ev) {
    ev.stopPropagation();
    document.querySelector(".search.active").classList.remove("active");
});
hamButton.addEventListener("click", function() {
    document.querySelector(".search.active").classList.remove("active");
});

//ouvre activity
activity.forEach(element => {
    element.addEventListener("click", function(ev) {
        console.log(this);
       if(document.querySelector(".activity.active")) document.querySelector(".activity.active").classList.remove("active")
        this.classList.add("active");
        
        //scroll view se positionne sur activity top
        console.log(this.offsetTop);
        document.documentElement.scrollTop = this.offsetTop;
});
});


//like

let like = document.querySelectorAll(".like")

like.forEach(ev => {
ev.addEventListener("click", function() {
    console.log(this);
    
    this.classList.toggle("active");
});
});
