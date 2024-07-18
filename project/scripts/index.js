document.addEventListener('DOMContentLoaded', function () {
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

const gridContainer = document.querySelector('.grid-container');

function createRecipeCards(recipes) {
    gridContainer.innerHTML = '';
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
}

createRecipeCards(recipes);
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

document.querySelector("#all").addEventListener("click", () => {
    window.location.href = "index.html";
})






































// const chickenPateRecipe = {
//     imageUrl: "https://naoseicozinhar.com.br/wp-content/uploads/2023/08/PATE_DE_FRANGO_02-300x300.jpeg",
//     title: "Creamy Chicken Paté",
//     ingredients: [
//         "2 chicken breasts, cooked and shredded",
//         "1 can of cream (unsweetened)",
//         "1/2 cup of mayonnaise",
//         "1 tablespoon of mustard",
//         "1 tablespoon of ketchup",
//         "1 small onion, grated",
//         "2 cloves of garlic, minced",
//         "Salt and black pepper to taste",
//         "Chopped parsley to taste",
//         "Olive oil for sautéing"
//     ],
//     instructions: [
//         "Preparing the Chicken: Cook the chicken breasts in water with a pinch of salt until fully cooked. Shred the chicken using a fork or food processor.",
//         "Sautéing: In a pan, heat a little olive oil and sauté the onion until translucent. Add the garlic and sauté for another minute.",
//         "Mixing the Paté: In a large bowl, mix the shredded chicken, sautéed onion and garlic. Add the cream, mayonnaise, mustard, and ketchup, and mix well.",
//         "Seasoning: Season with salt and black pepper to taste. Add chopped parsley and mix until all ingredients are well combined.",
//         "Chilling: Transfer the pâté to a container with a lid and refrigerate for at least 1 hour before serving. This will enhance the flavors and firm up the texture.",
//         "Serving: Serve the creamy chicken pâté with toast, bread, or crackers."
//     ],
//     tips: [
//         "For extra flavor, you can add chopped olives, grated carrots, or sweet corn to the pâté.",
//         "For a lighter version, substitute mayonnaise with plain yogurt."
//     ],
//     storage: "Store the chicken pâté in a sealed container in the refrigerator for up to 3 days."
// };

// console.log(chickenPateRecipe);

// const homemadeWaffleRecipe = {
//     imageUrl: "https://catracalivre.com.br/wp-content/uploads/2021/04/waffle-8-900x600-1.jpeg",
//     title: "Homemade Waffle Recipe",
//     ingredients: [
//         "2 eggs",
//         "2 cups all-purpose flour",
//         "1 3/4 cups milk",
//         "1/2 cup vegetable oil",
//         "1 tablespoon sugar",
//         "4 teaspoons baking powder",
//         "1/4 teaspoon salt",
//         "1 teaspoon vanilla extract (optional)"
//     ],
//     instructions: [
//         "Separate the egg whites from the yolks. Beat the egg whites until stiff peaks form.",
//         "In a separate bowl, mix together the egg yolks, milk, vegetable oil, and vanilla extract (if using).",
//         "In another bowl, combine the flour, sugar, baking powder, and salt.",
//         "Gradually add the dry ingredients to the egg yolk mixture, alternating with the milk, until smooth.",
//         "Carefully fold in the beaten egg whites into the batter, gently stirring to maintain the lightness of the batter.",
//         "Preheat your waffle iron according to manufacturer's instructions.",
//         "Pour a portion of the batter onto the hot waffle iron and cook until golden and crispy.",
//         "Serve the homemade waffles hot, topped with honey, fresh fruits, maple syrup, or your favorite toppings."
//     ],
//     tips: [
//         "For a healthier version, substitute some of the all-purpose flour with oat flour.",
//         "For crispier waffles, allow them to cook a bit longer in the waffle iron."
//     ],
//     variations: [
//         "Add chopped chocolate, blueberries, or nuts to the batter before cooking to create different flavored waffles."
//     ]
// };

// console.log(homemadeWaffleRecipe);

// const cinnamonRollsRecipe = {
//     imageUrl: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/2bb229657b3128839aa61eec4119ec27.jpg",
//     title: "Cinnamon Rolls",
//     doughIngredients: [
//         "1 cup warm milk",
//         "1 package active dry yeast (10g)",
//         "1/2 cup sugar",
//         "1/3 cup melted butter",
//         "1 tsp salt",
//         "2 eggs",
//         "4 cups all-purpose flour"
//     ],
//     fillingIngredients: [
//         "1 cup brown sugar",
//         "2 1/2 tbsp ground cinnamon",
//         "1/3 cup melted butter"
//     ],
//     frostingIngredients: [
//         "1/2 cup softened butter",
//         "1 1/2 cups powdered sugar",
//         "1/2 cup cream cheese",
//         "1/2 tsp vanilla extract",
//         "1/8 tsp salt"
//     ],
//     preparationSteps: {
//         doughPreparation: [
//             "In a small bowl, dissolve yeast in warm milk and let it sit for 5 minutes.",
//             "In a large bowl, mix sugar, melted butter, salt, and eggs.",
//             "Add the dissolved yeast mixture to the sugar and egg mix.",
//             "Gradually mix in flour until a soft dough forms.",
//             "Transfer dough onto a floured surface and knead for 5-10 minutes.",
//             "Place dough in a greased bowl, cover, and let it rise in a warm place for 1 hour or until doubled in size."
//         ],
//         assembly: [
//             "After dough has risen, roll it out into a 16x10 inch rectangle.",
//             "Spread melted butter over the dough.",
//             "Mix brown sugar and cinnamon, then sprinkle evenly over the buttered dough.",
//             "Roll up the dough tightly, starting from the long side.",
//             "Cut rolled dough into 12 slices and place them in a greased baking pan."
//         ],
//         baking: [
//             "Cover rolls with a clean cloth and let them rise for an additional 30 minutes.",
//             "Preheat oven to 350°F (180°C).",
//             "Bake rolls for 20-25 minutes or until golden brown."
//         ],
//         frostingPreparation: [
//             "While rolls are baking, beat together softened butter, cream cheese, powdered sugar, vanilla extract, and salt until creamy.",
//             "Spread frosting over warm cinnamon rolls."
//         ]
//     },
//     tips: [
//         "For added flavor, sprinkle chopped nuts or raisins over the cinnamon-sugar mixture before rolling.",
//         "Serve cinnamon rolls warm to enjoy their soft texture and delicious aroma."
//     ]
// };

// console.log(cinnamonRollsRecipe);

// const veganChocolateCakeRecipe = {
//     imageUrl: "https://veggiedesserts.com/wp-content/uploads/2019/02/vegan-chocolate-cake-sq.jpg",
//     title: "Vegan Chocolate Cake",
//     ingredients: {
//         dryIngredients: [
//             "1 1/2 cups all-purpose flour",
//             "1 cup granulated sugar",
//             "1/4 cup cocoa powder",
//             "1 tsp baking soda",
//             "1/2 tsp salt"
//         ],
//         wetIngredients: [
//             "1 cup almond milk (or any plant-based milk)",
//             "1/3 cup vegetable oil",
//             "1 tbsp white or apple cider vinegar",
//             "1 tsp vanilla extract"
//         ],
//         frostingIngredients: [
//             "1/2 cup vegan butter, softened",
//             "2 cups powdered sugar",
//             "1/4 cup cocoa powder",
//             "1/4 cup almond milk",
//             "1 tsp vanilla extract"
//         ]
//     },
//     preparationSteps: {
//         cakePreparation: [
//             "Preheat oven to 350°F (175°C). Grease and flour a round cake pan.",
//             "In a large bowl, sift together all dry ingredients: flour, sugar, cocoa powder, baking soda, and salt.",
//             "In another bowl, whisk together wet ingredients: almond milk, vegetable oil, vinegar, and vanilla extract.",
//             "Pour the wet ingredients into the dry ingredients and mix until smooth and well combined.",
//             "Pour batter into the prepared cake pan and smooth the top with a spatula.",
//             "Bake in preheated oven for 30-35 minutes, or until a toothpick inserted into the center comes out clean.",
//             "Remove from oven and let the cake cool completely in the pan."
//         ],
//         frostingPreparation: [
//             "In a mixing bowl, beat vegan butter until creamy.",
//             "Gradually add powdered sugar and cocoa powder, alternating with almond milk and vanilla extract, beating until smooth and creamy.",
//             "Once the cake has cooled, spread frosting evenly over the top and sides of the cake."
//         ]
//     },
//     tips: [
//         "For a richer chocolate flavor, use dark cocoa powder.",
//         "Decorate the cake with fresh berries or shaved chocolate for an elegant touch."
//     ]
// };

// console.log(veganChocolateCakeRecipe);

// const arabicHummusRecipe = {
//     imageUrl: "https://www.bloomsandrainbows.com/wp-content/uploads/2017/09/Homemade-Hummus-1.jpg",
//     title: "Arabic Hummus",
//     ingredients: {
//         mainIngredients: [
//             "1 can (15 oz) chickpeas, drained and rinsed",
//             "1/4 cup tahini (sesame paste)",
//             "3 tablespoons lemon juice",
//             "1-2 cloves garlic, minced",
//             "1/2 teaspoon ground cumin",
//             "Salt, to taste",
//             "3 tablespoons olive oil",
//             "2-3 tablespoons water"
//         ],
//         garnish: [
//             "Extra virgin olive oil, for drizzling",
//             "Paprika, for sprinkling",
//             "Fresh parsley, chopped, for garnish"
//         ]
//     },
//     preparationSteps: [
//         "In a food processor, combine chickpeas, tahini, lemon juice, minced garlic, ground cumin, and salt.",
//         "Process until smooth, scraping down the sides of the bowl as needed.",
//         "While the processor is running, drizzle in olive oil and water until the hummus reaches a creamy consistency.",
//         "Taste and adjust seasoning if needed.",
//         "Transfer hummus to a serving bowl. Create a swirl pattern on the surface with the back of a spoon.",
//         "Drizzle with extra virgin olive oil, sprinkle with paprika, and garnish with chopped parsley.",
//         "Serve hummus with pita bread, fresh vegetables, or as desired."
//     ],
//     tips: [
//         "For a smoother hummus, peel the chickpeas before processing.",
//         "Adjust the consistency by adding more water or olive oil if desired.",
//         "Store leftover hummus in an airtight container in the refrigerator for up to one week."
//     ]
// };

// console.log(arabicHummusRecipe);

// const americanPancakesRecipe = {
//     imageUrl: "https://realfood.tesco.com/media/images/American-pancakes-LGH-21fbfc2e-6462-4078-92ed-e830f88784be-0-1400x919.jpg",
//     title: "American Pancakes",
//     ingredients: {
//         dryIngredients: [
//             "1 cup all-purpose flour",
//             "2 tablespoons granulated sugar",
//             "1 teaspoon baking powder",
//             "1/2 teaspoon baking soda",
//             "1/4 teaspoon salt"
//         ],
//         wetIngredients: [
//             "1 cup buttermilk (or 1 cup milk mixed with 1 tablespoon lemon juice or vinegar)",
//             "1 large egg",
//             "2 tablespoons unsalted butter, melted",
//             "1 teaspoon vanilla extract"
//         ]
//     },
//     preparationSteps: [
//         "In a large bowl, whisk together the dry ingredients: flour, sugar, baking powder, baking soda, and salt.",
//         "In another bowl, whisk together the wet ingredients: buttermilk, egg, melted butter, and vanilla extract.",
//         "Pour the wet ingredients into the dry ingredients. Stir gently until just combined. It's okay if the batter is slightly lumpy.",
//         "Heat a non-stick skillet or griddle over medium heat. Lightly grease with butter or cooking spray.",
//         "Pour about 1/4 cup of batter onto the skillet for each pancake. Cook until bubbles form on the surface and the edges look set, about 2-3 minutes.",
//         "Flip the pancakes and cook until golden brown on the bottom, about 1-2 minutes more.",
//         "Transfer pancakes to a plate and keep warm. Repeat with the remaining batter.",
//         "Serve warm with maple syrup, butter, fresh berries, or toppings of your choice."
//     ],
//     tips: [
//         "For fluffier pancakes, avoid overmixing the batter. It's okay if there are a few lumps.",
//         "Adjust the heat as needed to prevent pancakes from burning. A medium-low heat usually works well.",
//         "You can add chocolate chips, blueberries, or bananas to the batter for variation."
//     ]
// };

// console.log(americanPancakesRecipe);

// const fitnessRecipe = {
//     imageUrl: "https://www.onegreenplanet.org/wp-content/uploads/2018/11/quinoa-veggie-salad-2.jpg",
//     title: "Protein-Packed Quinoa Salad",
//     ingredients: {
//         saladBase: [
//             "1 cup quinoa, rinsed",
//             "2 cups water or vegetable broth",
//             "1/2 teaspoon salt"
//         ],
//         vegetables: [
//             "1 cup cherry tomatoes, halved",
//             "1 cucumber, diced",
//             "1 bell pepper, diced",
//             "1/2 red onion, thinly sliced"
//         ],
//         protein: [
//             "1 can (15 oz) chickpeas, drained and rinsed",
//             "1/2 cup edamame, shelled",
//             "1/2 cup crumbled feta cheese (optional)"
//         ],
//         dressing: [
//             "3 tablespoons olive oil",
//             "2 tablespoons lemon juice",
//             "1 tablespoon balsamic vinegar",
//             "1 clove garlic, minced",
//             "1 teaspoon honey or maple syrup",
//             "Salt and pepper to taste"
//         ]
//     },
//     preparationSteps: [
//         "In a medium saucepan, combine quinoa, water or broth, and salt. Bring to a boil, then reduce heat to low. Cover and simmer for 15 minutes, or until quinoa is cooked and liquid is absorbed. Remove from heat and let it cool.",
//         "In a large bowl, combine cooked quinoa, cherry tomatoes, cucumber, bell pepper, red onion, chickpeas, edamame, and feta cheese (if using).",
//         "In a small bowl or jar, whisk together olive oil, lemon juice, balsamic vinegar, minced garlic, honey or maple syrup, salt, and pepper to make the dressing.",
//         "Pour the dressing over the salad and toss gently to combine. Adjust seasoning if needed.",
//         "Serve immediately or refrigerate for later. This salad can be enjoyed cold or at room temperature."
//     ],
//     tips: [
//         "You can add grilled chicken breast or tofu for extra protein.",
//         "To make it vegan, omit the feta cheese or use a plant-based alternative.",
//         "Make a larger batch and store leftovers in an airtight container in the refrigerator for up to 3 days."
//     ]
// };

// console.log(fitnessRecipe);

// const hotDogRecipe = {
//     imageUrl: "https://www.tastingtable.com/img/gallery/toppings-make-all-the-difference-in-brazilian-style-hot-dogs/l-intro-1716122233.jpg",
//     title: "Brazilian Hot Dog (Cachorro Quente)",
//     ingredients: {
//         hotDogs: [
//             "4 hot dog buns"
//         ],
//         sausages: [
//             "4 sausages (traditional Brazilian style or your preferred type)"
//         ],
//         toppings: [
//             "1/2 cup mashed potatoes (optional)",
//             "1/2 cup shredded mozzarella cheese (optional)",
//             "1/2 cup corn kernels (canned or fresh)",
//             "1/2 cup diced tomatoes",
//             "1/2 cup diced onions",
//             "1/2 cup chopped green bell peppers",
//             "1/4 cup chopped parsley (optional)",
//             "Mayonnaise, ketchup, mustard, and/or hot sauce to taste"
//         ]
//     },
//     preparationSteps: [
//         "Cook the sausages according to package instructions (grilling or boiling).",
//         "Prepare the toppings: sauté the diced onions and green bell peppers until softened.",
//         "Warm the hot dog buns in the oven or toaster.",
//         "Assemble the hot dogs: place a sausage in each bun, then add mashed potatoes (if using), shredded mozzarella cheese (if using), corn kernels, diced tomatoes, sautéed onions and bell peppers, chopped parsley (if using), and condiments (mayonnaise, ketchup, mustard, hot sauce) as desired.",
//         "Serve hot immediately, optionally with potato chips or French fries on the side."
//     ],
//     tips: [
//         "You can customize your Brazilian hot dog with additional toppings like olives, grated carrots, or peas.",
//         "For a vegetarian version, substitute the sausage with veggie sausage or grilled tofu.",
//         "Adjust the toppings and condiments according to your taste preferences."
//     ]
// };

// console.log(hotDogRecipe);

// const quickEasyRecipe = {
//     imageUrl: "https://lacuisinedegeraldine.fr/wp-content/uploads/2022/04/Spaghetti-Aglio-Olio-Peperoncino-10-scaled.jpg",
//     title: "Quick and Easy Pasta Aglio e Olio",
//     ingredients: [
//         "200g spaghetti or pasta of your choice",
//         "4 cloves garlic, thinly sliced",
//         "1/4 cup olive oil",
//         "1/2 teaspoon red pepper flakes (adjust to taste)",
//         "Salt to taste",
//         "Freshly ground black pepper to taste",
//         "1/4 cup chopped fresh parsley (optional)",
//         "Grated Parmesan cheese for serving"
//     ],
//     preparationSteps: [
//         "Cook the pasta in a large pot of salted boiling water until al dente. Reserve 1/2 cup of pasta water, then drain the pasta.",
//         "In a large skillet, heat the olive oil over medium heat. Add the sliced garlic and red pepper flakes, and sauté until the garlic is golden and fragrant, about 1-2 minutes. Be careful not to burn the garlic.",
//         "Add the cooked pasta to the skillet. Toss well to coat the pasta with the garlic-infused olive oil. If the pasta seems dry, add a little of the reserved pasta water.",
//         "Season with salt and pepper to taste. Stir in chopped parsley if using.",
//         "Serve immediately, garnished with grated Parmesan cheese.",
//     ],
//     tips: [
//         "For added flavor, you can sprinkle some lemon zest over the pasta before serving.",
//         "Feel free to customize with additional ingredients such as cherry tomatoes, shrimp, or spinach for a variation.",
//         "Use good quality olive oil for the best flavor in this dish."
//     ]
// };

// console.log(quickEasyRecipe);

// const recipes = [chickenPateRecipe, homemadeWaffleRecipe, cinnamonRollsRecipe, veganChocolateCakeRecipe, arabicHummusRecipe, americanPancakesRecipe, fitnessRecipe, hotDogRecipe, quickEasyRecipe];

// const gridContainer = document.querySelector('.grid-container');

// recipes.forEach(recipe => {
//     const recipeCard = document.createElement('div');
//     recipeCard.classList.add('recipe-card');

//     const recipeImage = document.createElement('img');
//     recipeImage.src = recipe.imageUrl;
//     recipeImage.alt = recipe.title;

//     const recipeTitle = document.createElement('h3');
//     recipeTitle.textContent = recipe.title;

//     recipeCard.appendChild(recipeImage);
//     recipeCard.appendChild(recipeTitle);
//     gridContainer.appendChild(recipeCard);

//     recipeCard.addEventListener('click', () => {
//         // Implementar a lógica para abrir a página da receita selecionada
//         // Exemplo: window.location.href = recipe.html?recipe=${recipe.title};
//     });
// });