// script.js

// Function to load hotel data dynamically
function loadHotels() {
    const hotels = [
        {
            name: "Relais Castellucci",
            link: "https://www.booking.com/hotel/it/relais-castellucci.pt-br.html",
            description: "A beautiful hotel in Cortina d'Ampezzo."
        },
        // Add more hotel objects as needed
    ];

    const hotelList = document.getElementById('hotel-list');
    hotels.forEach(hotel => {
        const card = document.createElement('div');
        card.className = 'hotel-card';
        card.innerHTML = `
            <h3>${hotel.name}</h3>
            <p>${hotel.description}</p>
            <a href="${hotel.link}">View Details</a>
        `;
        hotelList.appendChild(card);
    });
}

// Call the function to load hotels when the page loads
window.onload = loadHotels;
