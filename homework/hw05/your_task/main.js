const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    const tracksEndpoint = baseURL + "?q=" + term + "&type=track";
    console.log(tracksEndpoint);

    const data = await fetch(tracksEndpoint) .then(response => response.json());
    console.log(data);

    document.querySelector('#track-section').innerHTML = '<h1>Songs</h1>';
    displaySongs(data);
}

async function getAlbums (term) {
    const albumsEndpoint = baseURL + "?q=" + term + "&type=album";
    console.log(albumsEndpoint);

    const data = await fetch(albumsEndpoint) .then(response => response.json());
    console.log(data);

    document.querySelector('#album-section').innerHTML = '<h1>Albums</h1>';
    displayAlbums(data);
}

async function getArtist (term) {
    const artistEndpoint = baseURL + "?q=" + term + "&type=artist";
    console.log(artistEndpoint);

    const data = await fetch(artistEndpoint) .then(response => response.json());
    console.log(data);

    document.querySelector('#artist-section').innerHTML = '<h1>Top Result</h1>';
    displayArtist(data);
};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}

function displayArtist(data) {
        const template = `
        <section id="artist-section">
        <section id="artist">
            <section class="artist-card" id="${data[0].id}">
                <div>
                    <img src="${data[0].image_url}">
                    <h2>${data[0].name}</h2>
                    <div class="footer">
                        <a href="spotify_url">
                            view on spotify
                        </a>
                    </div>
                </div>
            </section>
        </section>
        </section>
        `;
        document.querySelector('#artist-section').insertAdjacentHTML('beforeend', template);
};

function displayAlbums(data) {
    for (i=0; i<5; i++) {    
    const template = `
        <section class="album-card" id="${data[i].id}">
        <div>
            <img src="${data[i].image_url}">
            <h2>${data[i].name}</h2>
            <div class="footer">
                <a href="${data[i].spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
        </section>
        `;
        document.querySelector('#album-section').insertAdjacentHTML('beforeend', template);
        console.log(data[i])
    }
};

function displaySongs(data) {
    for (i=0; i<5; i++) {    
    const template = `
        <section class="track-item preview">
            <img src="${data[i].album.image_url}">
            <i class="fas play-track fa-play" aria-hidden="true"></i>
            <div class="label">
                <h2>${data[i].name}</h2>
                <p>${data[i].artist.name}</p>
            </div>
        </section>
        `;
        document.querySelector('#track-section').insertAdjacentHTML('beforeend', template);
        console.log(data[i])
    }
};