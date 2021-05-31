// Fonctionnalité n°1 : 

var footer1 = document.querySelector('footer');
footer1.addEventListener('click', displayClick);

function displayClick() { 
  console.log("clique");
}

// Fonctionnalité n°1_Bis :
var footer1 = document.querySelector('footer');
var count = 1;
footer1.addEventListener('click', displayClick);

function displayClick() {
  console.log("clic numéro " + count);
  count +=1 ;
}

// Fonctionnalité 2

var navbarHeader = document.getElementById('navbarHeader');
var hamburgerMenu = document.querySelector('button.navbar-toggler');

hamburgerMenu.addEventListener('click', function() {
  navbarHeader.classList.toggle("collapse");
});

// Fonctionnalité n°3 :

var cardFonct3 = document.getElementById('cardFonct3');
var editFonct3 = document.getElementById('editFonct3');

editFonct3.addEventListener('click', changeColor);

function changeColor() {
  textFonct3.style.color = 'red';
}

// Fonctionnalité n°4 :

var cardFonct2 = document.getElementById('cardFonct2');
var editFonct2 = document.getElementById('editFonct2');

editFonct2.addEventListener('click', changeColorBis);

function changeColorBis() {
  if (textFonct2.style.color === 'green'){
    textFonct2.style.color = 'black';
  }
  else {
    textFonct2.style.color = 'green';
  }
}

// Fonctionnalité n°5 :

var navbar1 = document.querySelector('div.navbar');
var bootstrap = document.querySelector('link');
var navbar2 = document.querySelector('main');

navbar1.addEventListener('dblclick', hideNavbar);
navbar2.addEventListener('dblclick', showNavbar);

function hideNavbar() { 
  bootstrap.setAttribute('disabled', 'disabled');
}
function showNavbar() {
  bootstrap.removeAttribute("disabled");
}



