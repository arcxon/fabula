function getCookie(keks) {
    /* Same as in switch.svg - needs improvement */
    var keks = `; ${document.cookie}`.match(`;\\s*${keks}=([^;]+)`);
    return keks ? keks[1] : '';
}

function setTheme() {
    if (getCookie('themeStyle') == 'dark') {
        document.body.style.backgroundColor = 'rgb(28, 27, 22)';
        document.body.style.color = 'rgb(223, 220, 205)'
    } else {
        document.body.style.backgroundColor = 'rgb(223, 212, 205)';
        document.body.style.color = 'rgb(41, 34, 30)'
    }
}
setInterval(setTheme, 100);
