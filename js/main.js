
/*
Name: Lacy Austin
Date: October 21, 2026
Assignment: Week 2 - JSON and Bootstrap

Purpose:
Use a JSON-style object to store favorite singers.
Loop through the data and display the singers
in a Bootstrap table.
*/

// Display the favorite singers
function displaySingers() {

    // Object containing an array of singers
    const musicData = {

        "singers": [

            {
                "artist": "Ozzy Osbourne",
                "song": "One of Those Days (feat. Eric Clapton)",
                "genre": "Heavy Metal"
            },

            {
                "artist": "Teddy Swims",
                "song": "Lose Control",
                "genre": "Soul / R&B"
            },

            {
                "artist": "Staind",
                "song": "Better Days (feat. Dorothy)",
                "genre": "Alternative Metal"
            },

            {
                "artist": "Breaking Benjamin",
                "song": "Dance with the Devil",
                "genre": "Alternative Rock"
            },

            {
                "artist": "Papa Roach",
                "song": "Leave a Light On",
                "genre": "Alternative Rock"
            },

            {
                "artist": "HARDY",
                "song": "JACK",
                "genre": "Country Rock"
            },

            {
                "artist": "Volbeat",
                "song": "Dead but Rising",
                "genre": "Heavy Metal"
            },

            {
                "artist": "Metallica",
                "song": "Fuel",
                "genre": "Heavy Metal"
            },

            {
                "artist": "Eminem",
                "song": "The Real Slim Shady",
                "genre": "Hip-Hop"
            },

            {
                "artist": "Five Finger Death Punch",
                "song": "When the Seasons Change",
                "genre": "Heavy Metal"
            },

            {
                "artist": "Mary J. Blige",
                "song": "No More Drama",
                "genre": "R&B / Hip-Hop Soul"
            },

            {
                "artist": "Missy Elliott",
                "song": "Work It",
                "genre": "Hip-Hop"
            },

            {
                "artist": "Flo Rida",
                "song": "Low",
                "genre": "Hip-Hop"
            }

        ]

    };

    // Locate the HTML table body
    const singerTable =
        document.getElementById("singerTable");

    // Clear the table before adding rows
    singerTable.innerHTML = "";

    // Loop through each singer
    musicData.singers.forEach(function(singer) {

        // Create a new table row
        const row = document.createElement("tr");

        // Create cells for artist, song, and genre
        const artistCell = document.createElement("td");
        const songCell = document.createElement("td");
        const genreCell = document.createElement("td");

        // Add singer information to each cell
        artistCell.textContent = singer.artist;
        songCell.textContent = singer.song;
        genreCell.textContent = singer.genre;

        // Add the cells to the row
        row.appendChild(artistCell);
        row.appendChild(songCell);
        row.appendChild(genreCell);

        // Add the row to the Bootstrap table
        singerTable.appendChild(row);

    });

}

// Run the function when the page finishes loading
document.addEventListener(
    "DOMContentLoaded",
    displaySingers
);
