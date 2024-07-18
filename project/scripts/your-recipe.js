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
    
    // Save form data on submit
    const form = document.querySelector('form');
    form.addEventListener('submit', saveFormData);
});

function saveFormData(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    localStorage.setItem('formData', JSON.stringify(formObject));
    window.location.href = 'submitted-recipes.html'; // Redirect to submitted recipes page
}