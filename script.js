//computerPlay decides computer's choice
function computerPlay() {
    let i = Math.floor(Math.random() * 3) //random integer <0,2>
    if (i === 0) {
        return 'Rock';
    }
    else if (i === 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}
