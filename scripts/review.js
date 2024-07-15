document.addEventListener('DOMContentLoaded', function() {
    // Set the current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // Set the last modified date in the footer
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

   // Check if the form was submitted
   if (localStorage.getItem('formSubmitted') === 'true') {
    // Increment the review count
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    // Display the review count message
    document.getElementById('reviewCountMessage').textContent = `You have submitted ${reviewCount} reviews.`;

    // Reset the formSubmitted indicator
    localStorage.removeItem('formSubmitted');
}
});