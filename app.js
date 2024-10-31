const hambuger = document.querySelector('.hambuger');
const navMenu = document.querySelector('.nav-menu');

hambuger.addEventListener("click",mobileMenu);

function mobileMenu() {
    hambuger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink =document.querySelectorAll('.nav-link');
navLink.forEach((n)=> n.addEventListener('click',closeMenu));

function closeMenu() {
    hambuger.classList.remove("active");
    navMenu.classList.remove("active");
}

function img(anything) {
    document.querySelector('.slide').src =anything;
}

function change(change) {
    const line = document.querySelector('.image');
    line.style.background = change;
}


var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionIHeading');

    for (i = 0; i < accHD.length; i++) {
      accHD[i].addEventListener('click', toggleItem, false);
    }

    function toggleItem() {
      var itemClass = this.parentNode.className;
      for (var i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
      }
      if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
      }
    }