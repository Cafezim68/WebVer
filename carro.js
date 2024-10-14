// carro.js
document.getElementById('searchInput').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let vehicleCards = document.getElementsByClassName('vehicle-card');

    Array.from(vehicleCards).forEach(function(card) {
        let title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(filter)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});
// Recuperar contadores do localStorage ou inicializar como zero
let omegaClicks = parseInt(localStorage.getItem('omegaClicks')) || 0; 
let civicClicks = parseInt(localStorage.getItem('civicClicks')) || 0; 

// Atualizar contadores na inicialização
document.getElementById('omegaClicks').innerText = 'Cliques: ' + omegaClicks;
document.getElementById('civicClicks').innerText = 'Cliques: ' + civicClicks;

function handleCardClick(vehicleName, link) {
    if (vehicleName === 'Omega Brabo') {
        omegaClicks++;
        localStorage.setItem('omegaClicks', omegaClicks); // Armazenar no localStorage
        document.getElementById('omegaClicks').innerText = 'Cliques: ' + omegaClicks;
    } else if (vehicleName === 'Civic Completo') {
        civicClicks++;
        localStorage.setItem('civicClicks', civicClicks); // Armazenar no localStorage
        document.getElementById('civicClicks').innerText = 'Cliques: ' + civicClicks;
    }

    location.href = link; // Redirecionar após atualizar contagem
}
