// var btn = document.querySelector('.aligns');
// var togle = document.querySelector('.toggle')

// btn.addEventListener('click', (e) => {
//     e.stopPropagation;
//     togle.classList.toggle('toggle-js')
// })

const toggle = document.querySelector(".aligns");
const menu = document.querySelector(".toggle");
const activeClass = "toggle-js";
toggle.addEventListener("click", function() {
    menu.classList.toggle(activeClass);
});
window.addEventListener("click", function(e) {
    if (!menu.contains(e.target) && !e.target.matches(".aligns")) {
        menu.classList.remove(activeClass);
    }
});