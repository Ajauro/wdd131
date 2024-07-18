document.addEventListener('DOMContentLoaded', function() {
    // Set the current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // Set the last modified date in the footer
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

    const header = document.querySelector("header");
    const hamburgerBtn = document.querySelector("#hamburger-btn");
    const closeMenuBtn = document.querySelector("#close-menu-btn");

    // Toggle mobile menu on hamburger button click
    hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

    // Close mobile menu on close button click
    closeMenuBtn.addEventListener("click", () => header.classList.remove("show-mobile-menu"));

    // Retrieve and display the submitted form data
    displaySubmittedData();
});

function displaySubmittedData() {
    const formData = localStorage.getItem('formData');
    if (formData) {
        const formObject = JSON.parse(formData);
        document.getElementById('submitted-recipe-name').textContent = formObject['recipe-name'];
        document.getElementById('submitted-date').textContent = formObject['date'];
        document.getElementById('submitted-ingredients').textContent = formObject['ingredients'];
        document.getElementById('submitted-preparation').textContent = formObject['preparation'];
        document.getElementById('submitted-tips').textContent = formObject['tips'];
        document.getElementById('submitted-name').textContent = formObject['name'];
        document.getElementById('submitted-email').textContent = formObject['email'];
    }
}