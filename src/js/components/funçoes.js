<<<<<<< HEAD
function copyToClipboard(text) {
    var tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    var discordLink = document.getElementById('discord-link');
    discordLink.textContent = 'Copiado';

    setTimeout(function () {
        discordLink.textContent = 'Discord';
    }, 3000);
}
=======
function copyToClipboard(text) {
    var tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    var discordLink = document.getElementById('discord-link');
    discordLink.textContent = 'Copiado';

    setTimeout(function () {
        discordLink.textContent = 'Discord';
    }, 3000);
}
>>>>>>> 136b70839c21b6203dd24554f0f6990a524d24e8
