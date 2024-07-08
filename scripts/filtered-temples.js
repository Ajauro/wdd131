//Temples Album

// getdates
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

//temples
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, US",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Fortaleza Ceará",
        location: "Fortaleza Ceará, Brazil",
        dedicated: "2019, June, 2",
        area: 3300, 
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fortaleza-brazil/400x250/1-Fortaleza-Temple-Photo-2233938.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 3700, 
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
    },
];

//function to clear the temple cards
function clearTempleCards() {
    const container = document.querySelector(".grid-container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

//function to create and display temple cards
function createTempleCard(filteredTemples) {
    clearTempleCards();
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        card.classList.add("temple-card");

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: </span>${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication: </span>${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size: </span>${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl)
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy"); 

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        //classe especifica baseada no nome do templo
        //const templeClassName = temple.templeName.toLowerCase().replace(/\s+/g, '-');
        //card.classList.add(templeClassName);

        document.querySelector(".grid-container").appendChild(card); 
    });
}

//display all temples on initial load (home)
createTempleCard(temples);

//event listeners for navigation menu items
document.querySelector("#home").addEventListener("click", () => createTempleCard(temples));
document.querySelector("#old").addEventListener("click", () => {
    const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    createTempleCard(oldTemples);
});
document.querySelector("#new").addEventListener("click", () => {
    const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    createTempleCard(newTemples);
});
document.querySelector("#large").addEventListener("click", () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(largeTemples);
});
document.querySelector("#small").addEventListener("click", () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCard(smallTemples);
});

