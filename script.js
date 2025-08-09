// Destinations Data
const destinations = [
    {
        id: 1,
        city: 'Dubai',
        country: 'United Arab Emirates',
        price: '1,200',
        image: './images/photo-1512453979798-5ea266f8880c.jpg'
    },
    {
        id: 2,
        city: 'Cairo',
        country: 'Egypt',
        price: '800',
        image: './images/photo-1572252009286-268acec5ca0a.jpg'
    },
    {
        id: 3,
        city: 'Istanbul',
        country: 'Turkey',
        price: '900',
        image: './images/photo-1524231757912-21f4fe3a7200.jpg'
    }
];

// Load Destinations
function loadDestinations() {
    const container = document.getElementById('destinations-container');
    
    destinations.forEach(dest => {
        const destinationHTML = `
            <div class="col-md-4">
                <div class="card destination-card shadow-sm">
                    <img src="${dest.image}" class="card-img-top destination-image" alt="${dest.city}">
                    <div class="card-body">
                        <h3 class="card-title h5">${dest.city}</h3>
                        <p class="card-text text-muted">${dest.country}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <button class="btn btn-primary">Book Now</button>
                            <span class="h5 mb-0">$${dest.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', destinationHTML);
    });
}

// Form Validation
function validateForm(event) {
    const form = event.target;
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Load destinations
    loadDestinations();
    
    // Add form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', validateForm);
    });
    
    // Initialize date inputs with today's date as minimum
    const dateInputs = document.querySelectorAll('input[type="date"]');
    const today = new Date().toISOString().split('T')[0];
    dateInputs.forEach(input => {
        input.min = today;
    });
});