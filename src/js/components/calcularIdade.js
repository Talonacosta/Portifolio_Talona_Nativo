<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {
    const infoIdadeElement = document.getElementById('infoIdade');

    function calcularIdade(dataNascimento) {
        // Converter a data de nascimento do formato "DD/MM/AAAA" para "AAAA-MM-DD"
        const partesData = dataNascimento.split('/');
        const dataNascimentoFormatada =
            partesData[2] + '-' + partesData[1] + '-' + partesData[0];

        const hoje = new Date();
        const dataNascimentoDate = new Date(dataNascimentoFormatada);

        const diferenca = hoje - dataNascimentoDate;

        const segundosTotais = Math.floor(diferenca / 1000); // Converter milissegundos em segundos
        const minutosTotais = Math.floor(segundosTotais / 60); // Converter segundos em minutos
        const horasTotais = Math.floor(minutosTotais / 60); // Converter minutos em horas
        const diasTotais = Math.floor(horasTotais / 24); // Converter horas em dias

        // Calcular anos, meses, dias, horas e minutos
        const anos = Math.floor(diasTotais / 365); // Supondo 365 dias por ano
        const meses = Math.floor((diasTotais % 365) / 30); // Supondo 30 dias por mês
        const dias = (diasTotais % 365) % 30;
        const horas = horasTotais % 24;
        const minutos = minutosTotais % 60;
        const segundos = segundosTotais % 60;

        return {
            anos,
            meses,
            dias,
            horas,
            minutos,
            segundos,
        };
    }

    function atualizarPaginaACadaSegundo() {
        // Data de nascimento no formato "DD/MM/AAAA"
        const dataNascimento = '22/01/2004';

        // Calcula a idade em anos, meses, dias, horas, minutos e segundos
        const idade = calcularIdade(dataNascimento);

        // Exibe a idade no elemento span formatada para o formato brasileiro
        infoIdadeElement.textContent = `Tenho:  ${idade.anos} anos, ${idade.meses} meses, ${idade.dias} dias, ${idade.horas} horas, ${idade.minutos} minutos e ${idade.segundos} segundos`;
    }

    // Chama a função para atualizar a página a cada segundo
    setInterval(atualizarPaginaACadaSegundo, 1000);

    // Chama a função uma vez para exibir a idade imediatamente
    atualizarPaginaACadaSegundo();
});
=======
document.addEventListener('DOMContentLoaded', function () {
    const infoIdadeElement = document.getElementById('infoIdade');

    function calcularIdade(dataNascimento) {
        // Converter a data de nascimento do formato "DD/MM/AAAA" para "AAAA-MM-DD"
        const partesData = dataNascimento.split('/');
        const dataNascimentoFormatada =
            partesData[2] + '-' + partesData[1] + '-' + partesData[0];

        const hoje = new Date();
        const dataNascimentoDate = new Date(dataNascimentoFormatada);

        const diferenca = hoje - dataNascimentoDate;

        const segundosTotais = Math.floor(diferenca / 1000); // Converter milissegundos em segundos
        const minutosTotais = Math.floor(segundosTotais / 60); // Converter segundos em minutos
        const horasTotais = Math.floor(minutosTotais / 60); // Converter minutos em horas
        const diasTotais = Math.floor(horasTotais / 24); // Converter horas em dias

        // Calcular anos, meses, dias, horas e minutos
        const anos = Math.floor(diasTotais / 365); // Supondo 365 dias por ano
        const meses = Math.floor((diasTotais % 365) / 30); // Supondo 30 dias por mês
        const dias = (diasTotais % 365) % 30;
        const horas = horasTotais % 24;
        const minutos = minutosTotais % 60;
        const segundos = segundosTotais % 60;

        return {
            anos,
            meses,
            dias,
            horas,
            minutos,
            segundos,
        };
    }

    function atualizarPaginaACadaSegundo() {
        // Data de nascimento no formato "DD/MM/AAAA"
        const dataNascimento = '22/01/2004';

        // Calcula a idade em anos, meses, dias, horas, minutos e segundos
        const idade = calcularIdade(dataNascimento);

        // Exibe a idade no elemento span formatada para o formato brasileiro
        infoIdadeElement.textContent = `Tenho:  ${idade.anos} anos, ${idade.meses} meses, ${idade.dias} dias, ${idade.horas} horas, ${idade.minutos} minutos e ${idade.segundos} segundos`;
    }

    // Chama a função para atualizar a página a cada segundo
    setInterval(atualizarPaginaACadaSegundo, 1000);

    // Chama a função uma vez para exibir a idade imediatamente
    atualizarPaginaACadaSegundo();
});
>>>>>>> 136b70839c21b6203dd24554f0f6990a524d24e8
