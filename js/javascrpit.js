
// function signFunction() {
//     var x = document.querySelector(".loginbox");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }



class ShowNav{
    constructor(element) {
        this.element = element;
        this.nav = document.querySelector('.show')
        this.element.addEventListener('click',()=> this.navShowing())
    }
    navShowing(){
        this.nav.classList.toggle('hide')
    }
}

const logo = document.querySelector('.logo')
let newlogo = new ShowNav(logo)


