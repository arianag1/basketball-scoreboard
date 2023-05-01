let homePoints = 0;
let guestPoints = 0;
let homeEl = document.getElementById("home-points");
let guestEl = document.getElementById("guest-points"); 

function add1HomePoints(){
    homePoints += 1;
    homeEl.textContent = homePoints;
}

function add2HomePoints(){
    homePoints += 2;
    homeEl.textContent = homePoints;
}

function add3HomePoints(){
    homePoints += 3;
    homeEl.textContent = homePoints;
}

function add1GuestPoints(){
    guestPoints += 1;
    guestEl.textContent = guestPoints;
}

function addGuestPoints(){
    guestPoints += 2;
    guestEl.textContent = guestPoints;
}

function add3GuestPoints(){
    guestPoints += 3;
    guestEl.textContent = guestPoints;
}
function newGame() {
    homePoints = 0;
    guestPoints = 0;
    
    homeEl.textContent = homePoints;
    guestEl.textContent = guestPoints;
}