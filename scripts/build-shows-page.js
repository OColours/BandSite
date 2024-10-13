const events = [
    { "Dates": "Mon Sept 09 2024", "Venue": "Ronald Lane", "Location": "San Francisco, CA" },
    { "Dates": "Tue Sept 17 2024", "Venue": "Pier 3 East", "Location": "San Francisco, CA" },
    { "Dates": "Sat Oct 12 2024", "Venue": "View Lounge", "Location": "San Francisco, CA" },
    { "Dates": "Sat Nov 16 2024", "Venue": "Hyatt Agency", "Location": "San Francisco, CA" },
    { "Dates": "Fri Nov 29 2024", "Venue": "Moscow Center", "Location": "San Francisco, CA" },
    { "Dates": "Wed Dec 18 2024", "Venue": "Press Club", "Location": "San Francisco, CA" }
];


const concertCardContainer = document.querySelector(".concert__card");
const concertTableContainer = document.querySelector(".concert__table");

function createConcertCard(concert) {
    const Concertcard = document.createElement("div");
    Concertcard.className = "concert__card--item";

    const dateDt = document.createElement("p");
    dateDt.innerText = concert.Dates;

    const venueTxt = document.createElement("p");
    venueTxt.innerText = concert.Venue;

    const locationTxt = document.createElement("p");
    locationTxt.innerText = concert.Location;

    const buyTicketBtn = document.createElement("button");
    buyTicketBtn.className = "btn_ticekt";
    buyTicketBtn.innerText = "Buy Ticket";

    buyTicketBtn.addEventListener("click", () => BuyTickethandler(concert));

    Concertcard.appendChild(dateDt);
    Concertcard.appendChild(venueTxt);
    Concertcard.appendChild(locationTxt);
    Concertcard.appendChild(buyTicketBtn);

    return Concertcard;
}

function createConcertTable(concerts) {
    const ConcertTable = document.createElement("table");

    const headerRow = document.createElement("tr");
    const headers = ["Date", "Venue", "Location", "Button"];
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.innerText = headerText;
        headerRow.appendChild(th);
    });
    ConcertTable.appendChild(headerRow);

    concerts.forEach(concert => {
        const row = document.createElement("tr");

        const dateCell = document.createElement("td");
        dateCell.innerText = concert.Dates;

        const venueCell = document.createElement("td");
        venueCell.innerText = concert.Venue;

        const locationCell = document.createElement("td");
        locationCell.innerText = concert.Location;

        const btnCell = document.createElement("td");
        const buyTicketBtn = document.createElement("button");
        buyTicketBtn.className = "btn_ticket";
        buyTicketBtn.innerText = "Buy Ticket";
        btnCell.appendChild(buyTicketBtn);

        buyTicketBtn.addEventListener("click", () => BuyTickethandler(concert));

        row.appendChild(dateCell);
        row.appendChild(venueCell);
        row.appendChild(locationCell);
        row.appendChild(btnCell);
        ConcertTable.appendChild(row);
    });

    return ConcertTable;
}

function renderConcertDetails() {
    concertCardContainer.innerHTML = "";
    concertTableContainer.innerHTML = "";

    events.forEach(event => {
        const card = createConcertCard(event);
        concertCardContainer.appendChild(card);
    });

    const table = createConcertTable(events);
    concertTableContainer.appendChild(table);
}


function BuyTickethandler(concert) {
    /*
    Source：
    https://stackoverflow.com/a/47177899
    https://community.retool.com/t/fetch-image-and-pass-base64-to-api/31662
    */
    const url = '../assets/partials/status_code_bird.txt';

    fetch(url)
        .then(response => {
            return response.text();
        })
        .then(base64String => {
            console.log('%c ', `padding: 100px; background: url(${base64String}); background-size: contain;`,"\r\nFetch concert data:\n", concert);
        })
        .catch(error => {
            console.error('Error loading the Base64 image:', error);
        });
}


renderConcertDetails();



