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
