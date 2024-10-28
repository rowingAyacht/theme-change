console.log("hellow")


function changeTheme() {
    const body = document.body;
    const h1 = document.querySelector("h1"); //used w3 schools for query selector

    if (document.getElementById('cool').checked) { //if cool is check, change the theme
        body.classList.remove('warm'); //used w3 schools to figure out what class list does
        h1.classList.remove('warm');
        body.classList.add('cool');
        h1.classList.add('cool');
    } else if (document.getElementById('warm').checked) {
        body.classList.remove('cool');
        h1.classList.remove('cool');
        body.classList.add('warm');
        h1.classList.add('warm');
    }
}