let homeScoreOne = document.getElementById("homeone")
let homeStoreEl = document.getElementById("homescore")
let homeScore = 0

function increaseHomeScoreOne() {
    homeScore += 1
    homeStoreEl.textContent = homeScore
}


function increaseHomeScoreTwo() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

let guestScoreOne = document.getElementById("guestone")
let guestStoreEl = document.getElementById("guestscore")
let guestScore = 0

function increaseGuestScoreOne() {
    guestScore += 1
    guestStoreEl.textContent = guestScore
}


function increaseGuestScoreTwo() {
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestStoreEl.textContent = guestScore
}
