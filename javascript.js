const toggle = document.getElementById("toggle-span");
const img = document.getElementById("ft-perfil");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("light");          
    document.body.classList.toggle("light");   

    // troca a imagem dependendo do tema
    if (document.body.classList.contains('light')) {
        img.src = 'imgs/imagem-prf.jpg';
        img.alt = 'foto1'; // imagem para light mode
    } else {
        img.src = 'imgs/foto2.jpeg'; // imagem para dark mode
        img.alt = 'foto2';
    }
});