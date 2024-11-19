// Imports Navigation Component to "header" ID components on all HTML pages
let header = document.getElementById("nav");

fetch("/components/nav.html")
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load Navigation Component')
        }
        return response.text()
    })
    .then(html => {
        header.innerHTML = html;
    })