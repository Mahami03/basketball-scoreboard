let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

let scoreHome = 0
let scoreGuest = 0

function incByNormalScoreHome() {
    scoreHome += 1
    homeScoreEl.textContent = scoreHome
}
function incByMidScoreHome() {
    scoreHome += 2
    homeScoreEl.textContent = scoreHome
}
function incByLargeScoreHome() {
    scoreHome += 3
    homeScoreEl.textContent = scoreHome
}

function incByNormalScoreGuest() {
    scoreGuest += 1
    guestScoreEl.textContent = scoreGuest
}
function incByMidScoreGuest() {
    scoreGuest += 2
    guestScoreEl.textContent = scoreGuest
}
function incByLargeScoreGuest() {
    scoreGuest += 3
    guestScoreEl.textContent = scoreGuest
}

function resetScores() {
    scoreHome = 0;
    scoreGuest = 0;
    homeScoreEl.textContent = "0";
    guestScoreEl.textContent = "0"
}