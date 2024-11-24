let movie = document.getElementsByName('movieSelector')[0];
let totalStatment = document.getElementById('conclution_p');
let ticketPrice = 000;
let totalTicketPrice = 000;

function selectSeat(e) {
    let currentSeat = e.currentTarget;

    if(movie.value == 'movie_1') {
        ticketPrice = 800;
    }
    else if(movie.value == 'movie_2') {
        ticketPrice = 400;
    }
    else if(movie.value == 'movie_3') {
        ticketPrice = 600;
    }else if(movie.value == 'movie_4') {
        ticketPrice = 700;
    }else if(movie.value == 'movie_5') {
        ticketPrice = 700;
    };
    if(currentSeat.className.includes('madle_seat')) {
        ticketPrice = ticketPrice + ticketPrice*20/100;
    };

    if(currentSeat.className.includes('selected_seat') == false) {
        totalTicketPrice = totalTicketPrice + ticketPrice;
        if(currentSeat.className.includes('madle_seat')) {
            currentSeat.className = 'seat madle_seat selected_seat';
        }
        else {
            currentSeat.className = 'seat selected_seat';
        };
        let arrayOfSelectedSeats = document.getElementsByClassName('selected_seat');
        let totalSeats = arrayOfSelectedSeats.length;
        totalStatment.textContent = `You have selected ${totalSeats} seats for a price of ${totalTicketPrice}tk`;
    }
    else if(currentSeat.className.includes('selected_seat')){
        if(currentSeat.className.includes('occupied_seat') == false){
            totalTicketPrice = totalTicketPrice - ticketPrice;
            if(currentSeat.className.includes('madle_seat')) {
                currentSeat.className = 'seat madle_seat';
            }
            else {
                currentSeat.className = 'seat';
            };
            let arrayOfSelectedSeats = document.getElementsByClassName('selected_seat');
            let totalSeats = arrayOfSelectedSeats.length;
            totalStatment.textContent = `You have selected ${totalSeats} seats for a price of ${totalTicketPrice}tk`;
        }
    }
};

function buyTicket (e) {
    let selectedSeats = document.getElementsByClassName('selected_seat');
    let totalSeats = selectedSeats.length;
    totalStatment.textContent = `You have bought ${totalSeats} seats for a price of ${totalTicketPrice}tk`;
    for(let i=0; i<totalSeats; i++) {
        selectedSeats[i].classList.add('occupied_seat')
    };
};