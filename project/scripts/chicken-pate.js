document.addEventListener('DOMContentLoaded', function() {
    // Set the current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // Set the last modified date in the footer
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;
});


const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => header.classList.remove("show-mobile-menu"));

const recipes = [
    {
        title: "Creamy Chicken Paté",
        imageUrl: "images/pate-de-frango.jpg",
        file: "chicken-pate.html",
        category: "savouries"
    }
];

const gridContainer = document.querySelector('.grid-container');
recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    const recipeImage = document.createElement('img');
    recipeImage.src = recipe.imageUrl;
    recipeImage.alt = recipe.title;
    recipeImage.loading = "lazy";
    
    const recipeTitle = document.createElement('h3');
    recipeTitle.textContent = recipe.title;
    recipeCard.appendChild(recipeImage);
    recipeCard.appendChild(recipeTitle);
    gridContainer.appendChild(recipeCard);
    recipeCard.addEventListener('click', () => {
        window.location.href = recipe.file;
    });
});

const stars = document.querySelectorAll('.star');
const ratingResult = document.getElementById('average-rating');
let currentRating = 0;
let rated = false;

stars.forEach(star => {
    star.addEventListener('click', function() {
        if (!rated) {
            rated = true;
            const value = parseInt(this.getAttribute('data-value'));
            currentRating = value;
            highlightStars(value);
            calculateAverageRating();
        }
    });
});

function highlightStars(value) {
    stars.forEach(star => {
        if (parseInt(star.getAttribute('data-value')) <= value) {
            star.textContent = '★';
        } else {
            star.textContent = '☆';
        }
    });
}

function calculateAverageRating() {
    // Aqui você pode implementar a lógica para calcular a média da avaliação
    // Por exemplo, somar as avaliações e dividir pelo número total de avaliações.
    // Atualize o valor da média no elemento HTML correspondente (ratingResult).
    // Exemplo simples:
    ratingResult.textContent = currentRating;
}