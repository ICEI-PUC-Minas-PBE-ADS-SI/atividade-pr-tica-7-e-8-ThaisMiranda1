// hoteis.js

// Function to load hotel data dynamically for hoteis.html
function loadHotels() {
    const hotels = [
        {
            name: "Hotel A",
            link: "https://example.com/hotel-a",
            description: "Description for Hotel A."
        },
        {
            name: "Hotel B",
            link: "https://example.com/hotel-b",
            description: "Description for Hotel B."
        },
        // Add more hotel objects as needed
    ];

    const hotelList = document.getElementById('hotel-list');
    
    // Check if hotelList exists
    if (hotelList) {
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
    } else {
        console.error("Hotel list element not found.");
    }
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", loadHotels);
