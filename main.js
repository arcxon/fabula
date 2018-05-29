function getCookie(keks) {
    /* Same as in switch.svg - needs improvement */
    var keks = `; ${document.cookie}`.match(`;\\s*${keks}=([^;]+)`);
    return keks ? keks[1] : '';
}

function setTheme() {
    if (getCookie('themeStyle') == 'dark') {
        document.body.style.backgroundColor = 'rgb(33, 30, 29)';
        document.body.style.color = 'rgb(203, 183, 183)';
    } else {
        document.body.style.backgroundColor = '#fbf0d9';
        document.body.style.color = '#5b4636'
    }
}
setInterval(setTheme, 100);
