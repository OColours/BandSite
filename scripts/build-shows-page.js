const events = [
    { "Dates": "Mon Sept 09 2024", "Venue": "Ronald Lane", "Location": "San Francisco, CA" },
    { "Dates": "Tue Sept 17 2024", "Venue": "Pier 3 East", "Location": "San Francisco, CA" },
    { "Dates": "Sat Oct 12 2024", "Venue": "View Lounge", "Location": "San Francisco, CA" },
    { "Dates": "Sat Nov 16 2024", "Venue": "Hyatt Agency", "Location": "San Francisco, CA" },
    { "Dates": "Fri Nov 29 2024", "Venue": "Moscow Center", "Location": "San Francisco, CA" },
    { "Dates": "Wed Dec 18 2024", "Venue": "Press Club", "Location": "San Francisco, CA" }
];

const concertCardcontainer = document.querySelector(".concert__card");
const concertTablecontainer = document.querySelector(".concert__table");

function loadConcertDetails() {
    concertCardcontainer.innerHTML = "";
    concertTablecontainer.innerHTML = "";

    events.forEach(e => {
        const card = document.createElement("div");
        card.className = "concert__card--item";
        card.innerHTML = `
            <p>${e.Dates}</p>
            <p>${e.Venue}</p>
            <p>${e.Location}</p>
            <button class="buy-ticket">Buy Ticket</button>
        `;
        concertCardcontainer.appendChild(card);
    });

    const table = document.createElement("table");
    const headerRow = `<tr><th>Date</th><th>Venue</th><th>Location</th></tr>`;
    table.innerHTML = headerRow;

    events.forEach(e => {
        const row = `<tr>
            <td>${e.Dates}</td>
            <td>${e.Venue}</td>
            <td>${e.Location}</td>
         <td><button class="buy-ticket">Buy Ticket</button></td>
        </tr>`;
        table.innerHTML += row;
    });

    concertTablecontainer.appendChild(table);
}

loadConcertDetails();
