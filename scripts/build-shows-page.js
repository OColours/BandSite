const events = [
    { "Dates": "Mon Sept 09 2024", "Venue": "Ronald Lane", "Location": "San Francisco, CA" },
    { "Dates": "Tue Sept 17 2024", "Venue": "Pier 3 East", "Location": "San Francisco, CA" },
    { "Dates": "Sat Oct 12 2024", "Venue": "View Lounge", "Location": "San Francisco, CA" },
    { "Dates": "Sat Nov 16 2024", "Venue": "Hyatt Agency", "Location": "San Francisco, CA" },
    { "Dates": "Fri Nov 29 2024", "Venue": "Moscow Center", "Location": "San Francisco, CA" },
    { "Dates": "Wed Dec 18 2024", "Venue": "Press Club", "Location": "San Francisco, CA" }
];

let selectedRow = null;

function createButton(event) {
    const button = document.createElement('button');
    button.classList.add(('buttons'))
    button.innerText = 'BUY TICKET';
    button.onclick = () => BuyTickethandler(event);
    return button;
}

function createTableRow(event) {
    const row = document.createElement('tr');

    const dateCell = document.createElement('td');
    const strong = document.createElement('strong');
    strong.innerText = event.Dates;
    dateCell.appendChild(strong);
    row.appendChild(dateCell);

    const venueCell = document.createElement('td');
    venueCell.innerText = event.Venue;
    row.appendChild(venueCell);

    const locationCell = document.createElement('td');
    locationCell.innerText = event.Location;
    row.appendChild(locationCell);

    const buttonCell = document.createElement('td');
    buttonCell.appendChild(createButton(event));
    row.appendChild(buttonCell);

    row.onclick = function() {
        selectedRow ? selectedRow.classList.remove('selected') : null;
        selectedRow = row;
        row.classList.add('selected');
    };

    return row;
}

function createCard(event) {
    const card = document.createElement('div');
    card.classList.add('concert__card--item');

    const headers = ['DATE', 'VENUE', 'LOCATION'];
    const data = [event.Dates, event.Venue, event.Location];

    headers.forEach((header, index) => {
        const headerElement = document.createElement('label');
        headerElement.classList.add('labels');
        headerElement.innerText = header;
        card.appendChild(headerElement);

        const dataElement = document.createElement('p');
        dataElement.classList.add('row');
        dataElement.classList.add('body');

        if (index === 0) {
            const strong = document.createElement('strong');
            strong.innerText = data[index];
            dataElement.appendChild(strong);
        } else {
            dataElement.innerText = data[index];
        }

        card.appendChild(dataElement);
    });

    card.appendChild(createButton(event));

    return card;
}


function renderConcertDetails () {
    const concertTable = document.getElementById('concertTable');
    const concertCards = document.getElementById('concertCards');

    events.forEach(event => {
        concertTable.appendChild(createTableRow(event));
        concertCards.appendChild(createCard(event));
    });
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
        .then(statusCodeString => {
            console.log("Fetch concert data:\n", concert);
            console.log('%c ', `padding: 100px; background: url(${statusCodeString}) no-repeat; background-size: contain;`);
        })
        .catch(error => {
            console.error('Error loading the Base64 image:', error);
        });
}


renderConcertDetails();



