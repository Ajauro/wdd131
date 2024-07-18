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

document.addEventListener('DOMContentLoaded', function() {
    // Função para obter as receitas do localStorage ou usar o array padrão
    function getRecipes() {
        const savedRecipes = localStorage.getItem('recipes');
        return savedRecipes ? JSON.parse(savedRecipes) : recipes;
    }

    // Função para salvar as receitas no localStorage
    function saveRecipes(recipes) {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }

    // Função para criar os cards de receitas com base nas receitas fornecidas
    function createRecipeCards(recipes) {
        const gridContainer = document.querySelector('.grid-container');
        gridContainer.innerHTML = '';

        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');

            const recipeImage = document.createElement('img');
            recipeImage.src = recipe.imageUrl;
            recipeImage.alt = recipe.title;

            const recipeTitle = document.createElement('h3');
            recipeTitle.textContent = recipe.title;

            recipeCard.appendChild(recipeImage);
            recipeCard.appendChild(recipeTitle);
            gridContainer.appendChild(recipeCard);

            recipeCard.addEventListener('click', () => {
                window.location.href = recipe.file;
            });
        });
    }

    // Carregar as receitas do localStorage ou usar o array padrão
    const recipes = getRecipes();
    createRecipeCards(recipes);

    // Event listeners para os filtros de categoria
    document.querySelector("#general").addEventListener("click", () => {
        createRecipeCards(recipes);
    });

    document.querySelector("#sweets").addEventListener("click", () => {
        const sweetRecipes = recipes.filter(recipe => recipe.category === "sweets");
        createRecipeCards(sweetRecipes);
    });

    document.querySelector("#savouries").addEventListener("click", () => {
        const savouryRecipes = recipes.filter(recipe => recipe.category === "savouries");
        createRecipeCards(savouryRecipes);
    });

    document.querySelector("#veggie").addEventListener("click", () => {
        const veganRecipes = recipes.filter(recipe => recipe.category === "veggie");
        createRecipeCards(veganRecipes);
    });

    document.querySelector("#fit").addEventListener("click", () => {
        const fitRecipes = recipes.filter(recipe => recipe.category === "fit");
        createRecipeCards(fitRecipes);
    });

    // Atualizar e salvar as receitas no localStorage
    saveRecipes(recipes);
});