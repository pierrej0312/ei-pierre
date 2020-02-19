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

//formulaire
let input = document.querySelectorAll(".input-contact");
let textarea = document.querySelectorAll(".textarea-contact");

input.forEach(element => {

    element.addEventListener("mouseout", function(){
        console.log(element.previousElementSibling)
        if(element.value == ""){
            element.previousElementSibling.classList.remove("texted")
        }
    })


    element.addEventListener("mouseenter", function() {
        console.log(element.previousElementSibling)
        element.previousElementSibling.classList.add("texted")
    })
   element.addEventListener("change", function() {
        if(element.value == ""){
            element.classList.remove("texted")
            element.previousElementSibling.classList.remove("texted")
        }
        else {
            element.classList.add("texted")
        }
   }); 
});
textarea.forEach(element => {
    element.addEventListener("change", function() {
         if(element.value == ""){element.classList.remove("texted")}
         else {
             element.classList.add("texted")
         }
    }); 
 });
