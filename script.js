function AbrirChamado() {
    // Duplicando as barras invertidas
    location.href = "./Abrir Chamado/login.html";
}

const btlogin = document.querySelector('.btlogin')
const menuicon = document.querySelector('.menuicon i')
const navigationMENU = document.querySelector('.navigationMENU')

menuicon.onclick = function () {
    navigationMENU.classList.toggle('open')
    const isOpen = navigationMENU.classList.contains('open')

    menuicon.classList = isOpen
    ? 'bx bx-menu'
    : 'bx bx-x-circle'
}