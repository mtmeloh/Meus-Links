const toggle = document.getElementById("toggle-span");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("light");          // move a lua
    document.body.classList.toggle("light");   // troca as cores do tema
});