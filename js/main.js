var mail = document.querySelector(".mail-link");
var mailTo = 'mailto:james@jamesmcgrath.io';

var addHREF = function() {
    this.setAttribute('href', mailTo);
};

mail.addEventListener('click', addHREF, { once: true });
