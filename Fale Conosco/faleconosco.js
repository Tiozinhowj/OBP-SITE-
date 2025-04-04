function AbrirChamado() {
    // Duplicando as barras invertidas
    location.href = "https://psfx.com.br/pws/index.php/pws";
}

const btlogin = document.querySelector('.btlogin')
const menuicon = document.querySelector('.menuicon i')
const navigationMENU = document.querySelector('.navigationMENU')

menuicon.onclick = function () {
    navigationMENU.classList.toggle('open')
    const isOpen = navigationMENU.classList.contains('open')

    menuicon.className = isOpen
        ? 'bx bx-x-circle'
        : 'bx bx-menu';
}

window.sr = ScrollReveal({ reset: false});

sr.reveal('.contact-container' ,{duration: 2500})



