const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

// Remember, using 'let' as the values will change
let photosArray = [];

// Unsplash API 
const count = 10;
const apiKey = 'RVTkMRY3M9EIDu95ISRfVT9ZimeyM_stUa1uF2y9IVY'; // Use 'Access Key'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
 

// Create elements for links and photos; add to DOM
function displayPhotos() {
    // run function for each photo in photosArray
    photosArray.forEach((photo) => {
        // create <a> element to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');

        // create image for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);

        // put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);

    });
}

// Get photos from Unsplash API
async function getPhotos () {
    try {
        const response = await fetch (apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // catch error here
        
    }
}

// On load
getPhotos(); 


/*
NOTES: 

Ctrl + click on variable/element will take you to the root of it, ie where its first instance/creation was made

*/