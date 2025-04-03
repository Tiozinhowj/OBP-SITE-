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

sr.reveal('.box',{duration: 2000})
sr.reveal('.indeximg' ,{duration: 4500})
sr.reveal('.box5' ,{duration: 2500})
sr.reveal('.indeximg2' ,{duration: 4500} )
sr.reveal('.box6' ,{duration: 2500})
sr.reveal('.indeximg3' ,{duration: 4500})


