/* console.log("hello world")
var imie = "Ewa"
var wiek = 18
console.log(imie);
console.log(wiek);
//tablica
var array = ["kot", "pies", "chomik"]
console.log(array);
//obiekt
var car = {
    marka: "golf",
    kolor: "czerwony",
    koła: 4,
}
//warunki
// if (warunek){instrukcja do wykonania}
var nr = prompt("Podaj jakąś liczbę")
if(nr>=18){
    console.log("jesteś pełnoletni")
} else {
    console.log("nie masz jeszcze 18 lat")
}

function sum(a,b) {
    return a+b;
}
var num1 = 3;
var num2 = 5;
*/
function mobileMenu() {
    var mobileMenuIcon = document.getElementById("mobile-menu-icon");
    var menu = document.getElementById("main-menu");
  
    if (mobileMenuIcon) {
      mobileMenuIcon.addEventListener("click", function() {
        menu.classList.toggle("opened");
        mobileMenuIcon.classList.toggle("opened");
      });
    }
  }
  
  mobileMenu();
