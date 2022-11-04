const restaurants = [
    "Suwana's Thai Orchid", 
    "Khao Thai Cuisine", 
    "Little Bee Thai", 
    "PIE.ZAA Pizza", 
    "Fahrenheit Pizza & Brewhouse", 
    "Fresh Wood Fired Pizza West", 
    "Wasabi", 
    "Red Ginger Dimsum And Tapas", 
    "Murasaki Asheville"
];
showRestaurants();


function showRestaurants() {
    // document.querySelector('#results').innerHTML = '';
    
for (let i=0; i<restaurants.length; i++) {
    const display = restaurants[i];
    console.log(display);
    sendRestaurants(display);
};

};

function sendRestaurants(display) {
    const dOutput = `
            <p>${display}</p>
        `;
    document.querySelector('#output').insertAdjacentHTML('beforeend', dOutput);
}