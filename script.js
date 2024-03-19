// Unsplash API 
const count = 10;
const apiKey = 'RVTkMRY3M9EIDu95ISRfVT9ZimeyM_stUa1uF2y9IVY'; // Use 'Access Key'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
 

// Get photos from Unsplash API
async function getPhotos () {
    try {
        const response = await fetch (apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // catch error here
        
    }
}

// On load
getPhotos(); 