document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano atual e a data da última modificação no rodapé
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

    // Manipulação do menu móvel
    const header = document.querySelector("header");
    const hamburgerBtn = document.querySelector("#hamburger-btn");
    const closeMenuBtn = document.querySelector("#close-menu-btn");

    // Alterna o menu móvel ao clicar no botão de hambúrguer
    hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

    // Fecha o menu móvel ao clicar no botão de fechar
    closeMenuBtn.addEventListener("click", () => header.classList.remove("show-mobile-menu"));

    // Verifica se a página atual é index.html
    if (window.location.pathname.includes('index.html')) {
        // Define o array de receitas
        const recipes = [
            { title: "Creamy Chicken Paté", imageUrl: "images/pate-de-frango.jpg", file: "chicken-pate.html", category: "savouries"},
            { title: "Homemade Waffle Recipe", imageUrl: "images/waffles.jpg", file: "waffles.html", category: "sweets"},
            { title: "Cinnamon Rolls", imageUrl: "images/cinnamon-roll.jpg", file: "cinnamon-roll.html", category: "sweets"},
            { title: "Vegan Chocolate Cake", imageUrl: "images/vegan_chocolate_cake.jpg", file: "vegan-chocolate-cake.html", category: "veggie"},
            { title: "Arabic Hummus", imageUrl: "images/arabic-hummus.jpg", file: "arabic-hummus.html", category: "fit"},
            { title: "American Pancakes", imageUrl: "images/americanpancake.jpg", file: "american-pancakes.html", category: "sweets"},
            { title: "Protein-Packed Quinoa Salad", imageUrl: "images/quinoa-salad.jpg", file: "quinoa-salad.html", category: "fit"},
            { title: "Brazilian Hot Dog (Cachorro Quente)", imageUrl: "images/brazilian-hot-dog.jpg", file: "brazilian-hotdog.html", category: "savouries"},
            { title: "Easy Pasta Aglio e Olio", imageUrl: "images/spaghetti-aglio-olio.jpg", file: "pasta-aglio-olio.html", category: "savouries"}
        ];

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
        const recipesFromStorage = getRecipes();
        createRecipeCards(recipesFromStorage);

        // Event listeners para os filtros de categoria
        document.querySelector("#general").addEventListener("click", () => {
            createRecipeCards(recipesFromStorage);
        });

        document.querySelector("#sweets").addEventListener("click", () => {
            const sweetRecipes = recipesFromStorage.filter(recipe => recipe.category === "sweets");
            createRecipeCards(sweetRecipes);
        });

        document.querySelector("#savouries").addEventListener("click", () => {
            const savouryRecipes = recipesFromStorage.filter(recipe => recipe.category === "savouries");
            createRecipeCards(savouryRecipes);
        });

        document.querySelector("#veggie").addEventListener("click", () => {
            const veganRecipes = recipesFromStorage.filter(recipe => recipe.category === "veggie");
            createRecipeCards(veganRecipes);
        });

        document.querySelector("#fit").addEventListener("click", () => {
            const fitRecipes = recipesFromStorage.filter(recipe => recipe.category === "fit");
            createRecipeCards(fitRecipes);
        });

        // Atualizar e salvar as receitas no localStorage
        saveRecipes(recipesFromStorage);
    }
});