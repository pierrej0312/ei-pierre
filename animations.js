let hamButton = document.querySelector(".ham-button");
let nav = document.querySelector(".main-nav")
let activityList
//ouvre nav
hamButton.addEventListener("click", function() {
        hamButton.classList.toggle("active");
        nav.classList.toggle("active");
  });

let search = document.querySelector(".search");
let closeSearch = document.querySelector(".close-search");
let searchForm = document.querySelector(".search-form");
let more = document.querySelector(".more");


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
let activityOpen = function() {
    let activity = document.querySelectorAll(".activity")
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
}


//formulaire
let input = document.querySelectorAll(".input-contact");


input.forEach(element => {

    let submitButton = document.querySelector(".send-button");
    let btn = document.querySelector("button[disabled]")

    // submit active
    element.addEventListener("change", function() {
        console.log(element.value.length)
        for (let i = 0; i < input.length; i++) {
            let theField = input[i] //recuération d'un champ
            
             if ( theField.value == '') // si la valeur est vide
             {
                 test = false
                 break //sortir de la boucle
             }
             else if (theField.type == 'email') { //si pas vide mais email
                 let expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/ //pattern
                 if (!expressionReguliere.test(theField.value)) { //si value différent du pattern
                     test = false
                     break //sortir boucle
                 }

             }
             else { //value ok
                 test = true
             }
         }

         if ( test == true) { 
             btn.removeAttribute('disabled') //active le btn en retirant attriut desabled
         }
         else {
             btn.setAttribute('disabled', true) // désactive le btn en ajoutant l'attribut desabled
         }
         //  console.log(test)
        })

    




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



//remplir activities avec API

let url = 'https://cepegra.yo.fr/kazan_api/'
let start = 0;
/*url api
https://cepegra.yo.fr/kazan_api/*/
let activities = document.querySelector(".activities");

let Affiche = function() {
    activityList.forEach(element => {
        //console.log(element)
        activities.innerHTML += `<li class="activity">

        <!--more button-->
        <a href="" class="more">
            <span></span>
            <span></span>
            <span></span>
        </a>
        <figure>
            <img class="activity-img" src="${element.img}" alt="${element.text_img}">
            <figcaption>
                <h2 class="lieu"><strong>${element.title}</strong>${element.title2}</h2>
                
            </figcaption>
        </figure>
        <h4 class="location center">${element.situation}</h4>
        <div class="activity-content">  
        <h3 class="center">${element.ss_titre}</h3>
        <p class="activity-descr">${element.texte}</p>
        <ul class="activity-buttons">
            <li>
                <span class="like"></span>
            </li>
            <li>
                <a href="" class="read-more">Read more</a>
            </li>
        </ul>
        </div>
    </li>`
    })
}


const Main = function() {
    axios.get(url)
    .then(response => {
        activityList = response.data.feed
        //console.log(activityList)
    })
    .then(Affiche)
    .then(activityOpen)
    .catch( function() {
        alert('erreur de chargement')
    })
}
window.addEventListener("load", Main)