const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false; 
let imagesLoaded = 0;
let totalImages = 0; 
// Remember, using 'let' as the values will change
let photosArray = [];

// Unsplash API 
const count = 30;
const apiKey = 'RVTkMRY3M9EIDu95ISRfVT9ZimeyM_stUa1uF2y9IVY'; // Use 'Access Key'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
 

// Check if all images were loaded 
function imageLoaded() {
    imagesLoaded++;
    // console.log(imagesLoaded);
    if (imagesLoaded  === totalImages) {
        ready = true;
        loader.hidden = true;
        // console.log('ready=', ready);
    }
}

// Helper function to Set Atrributes on DOM Elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}


// Create elements for links and photos; add to DOM
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    // console.log('total images', totalImages);
    // run function for each photo in photosArray
    photosArray.forEach((photo) => {
        // create <a> element to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });

        // create image for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // Event listener, check when each image is finished loading
        img.addEventListener('load', imageLoaded);
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

// Check to see if scrolling at the bottom of the page
window.addEventListener('scroll', () => {
    
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos();
    }
});

// On load
getPhotos(); 


/*
* NOTES: 

* Commented out console logs isntead of removing, for code review/practice

* Ctrl + click on variable/element will take you to the root of it, ie where its first instance/creation was made

* DRY = Don't Repeat Yourself. Don't use repeated code lines, create functionality to make it simpler. eg: helper function above
eg:     item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);

*/