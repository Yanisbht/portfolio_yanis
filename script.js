document.addEventListener("DOMContentLoaded", function() {
    console.log("Page chargée avec succès !");
});
function toggleSkill(id) {
    let skillDetail = document.getElementById(id);
    if (skillDetail.style.display === "block") {
        skillDetail.style.display = "none";
    } else {
        skillDetail.style.display = "block";
    }
}

function toggleSkill(id, element) {
    let skillDetail = document.getElementById(id);
    let arrow = element.querySelector(".arrow");

    if (skillDetail.style.display === "block") {
        skillDetail.style.display = "none";
        arrow.innerHTML = "▼"; // Flèche visible quand fermé
    } else {
        skillDetail.style.display = "block";
        arrow.innerHTML = ""; // Supprime la flèche quand ouvert
    }
}

let currentProject = 0;
const projects = document.querySelectorAll(".project-item");
const dots = document.querySelectorAll(".dot");

function showProject(index) {
    projects[currentProject].classList.remove("active");
    dots[currentProject].classList.remove("active");

    currentProject = index;

    projects[currentProject].classList.add("active");
    dots[currentProject].classList.add("active");
}

// Initialisation : Activer le premier projet
showProject(0);


