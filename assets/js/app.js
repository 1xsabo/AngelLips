let openMenu = document.querySelector('.header-bar .icon-1')
let navMenu = document.querySelector('.nav-bar')
let closeMenu = document.querySelector('.header-bar .icon-2')
openMenu.onclick = function () {
    navMenu.classList.add('active-nav')
    closeMenu.style.display="block"
    openMenu.style.display="none"
}
closeMenu.onclick = function () {
    navMenu.classList.remove('active-nav')
    openMenu.style.display="block"
    closeMenu.style.display="none"
}
var modal = document.querySelector(".modal-bg");

// Get the button that opens the modal
var btns = document.getElementsByClassName('applyBtn')

// Get the <span> element that closes the modal
var span = document.querySelector(".modal-close");

for (let i=0; i<btns.length; i++) {
    btns[i].onclick = function () {
        modal.style.opacity = "1";
        modal.style.visibility = "visible";
    }
}

span.onclick = function() {
    modal.style.opacity = "0";
    modal.style.visibility= "hidden";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.opacity = "0";
        modal.style.visibility= "hidden";

    }
}
