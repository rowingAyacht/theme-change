console.log("hellow")


function changeTheme() {
    const body = document.body;
    const h1 = document.querySelector("h1"); //used w3 schools for query selector

    if (document.getElementById('cool').checked) {
        body.className = 'cool';
        h1.className = 'cool';
        
    } else if (document.getElementById('warm').checked) {
        body.className = 'warm';
        h1.className = 'warm';
    }
}