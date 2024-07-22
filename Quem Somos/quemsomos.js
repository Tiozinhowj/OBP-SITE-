function AbrirChamado() {
    // Duplicando as barras invertidas
    location.href = "../Abrir Chamado/login.html";
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

window.sr = ScrollReveal({ reset: true});

sr.reveal('.box' ,{duration: 2500})
sr.reveal('.quemsomospicture' ,{duration: 6000} )