const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'FPxK8kb2HfmfXY5dXi4NkUgpdmXWz-RrD0StfqJuoyI';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// Helper Function to Set Attributes on DOM elements
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}


// Create Elements for Links & Photos, Add to DOM
function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach(
        (photo) => {
            // Create <a> that link to Unsplash
            const imageLink = document.createElement('a');
            setAttributes(imageLink, {
                'href': photo.links.html,
                'target': '_black',
            });
            // Create <img> for photo
            const image = document.createElement('img');
            setAttributes(image, {
                'src': photo.urls.regular,
                'alt': photo.alt_desciption,
                'title': photo.alt_description,
            });
            // Put <img> inside <a>, then put both inside imageContainer element
            imageLink.appendChild(image);
            imageContainer.appendChild(imageLink);
        }
    )
}


// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
        console.log(photoArray);
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getPhotos();