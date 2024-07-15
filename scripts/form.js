document.addEventListener('DOMContentLoaded', function() {
    // Set the current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // Set the last modified date in the footer
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;



    const products = [
        {
            id: 'fc-1888',
            name: "Flux Capacitor",
            avgRating: 4.5
        },
        {
            id: 'fc-2050',
            name: "Power Laces",
            avgRating: 4.7
        },
        {
            id: 'fs-1987',
            name: "Time Circuits",
            avgRating: 3.5
        },
        {
            id: 'ac-2000',
            name: "Low Voltage Reactor",
            avgRating: 3.9
        },
        {
            id: 'jj-1969',
            name: "Warp Equalizer",
            avgRating: 5.0
        }
    ];

     // Populate the product select dropdown
     const select = document.getElementById('product-name');
     products.forEach(product => {
         const option = document.createElement('option');
         option.value = product.id;
         option.textContent = product.name;
         select.appendChild(option);
     });
 
     // Add submit event to the form to set an indicator
     const form = document.querySelector('form');
     form.addEventListener('submit', function() {
         localStorage.setItem('formSubmitted', 'true');
     });
});
