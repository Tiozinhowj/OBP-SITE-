const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener ('click', ()=> {
   wrapper.classList.add('active');
})

loginLink.addEventListener ('click', ()=> {
    wrapper.classList.remove('active');
 })

 function BackHome() {
   location.href = "../index.html";
}

function Login () {
   var email = document.getElementById('email').value;
   var senha = document.getElementById('password').value;

   if (email === "william.pramos@outlook.com" && senha === "1234")
   { alert ('Bem Vindo William !'); 
   location.href = "../MenuCliente/menu.html";
   } else {
   Swal.fire({
   title: "Ops !",
   text: "Cadastro ou Senha Incorretos",
   icon: "error",
 });}
}
