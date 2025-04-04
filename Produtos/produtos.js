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

 window.sr = ScrollReveal({ reset: true});

sr.reveal('.indeximg1' ,{duration: 6000} )
sr.reveal('.box2' ,{duration: 2500})
sr.reveal('.indeximg2' ,{duration: 6000})
sr.reveal('.box3' ,{duration: 2500})
sr.reveal('indeximg3' ,{duration: 6000})
sr.reveal('.box8' ,{duration: 2500})
sr.reveal('indeximg4' ,{duration: 6000})
