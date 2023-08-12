// Conwntdown
const endDate = new Date("2023-08-27T23:59:59");

// Função para atualizar o contador regressivo
function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = endDate - currentDate;

    // Verifique se a promoção ainda está em andamento
    if (timeDifference > 0) {
        // Calcule os dias, horas, minutos e segundos restantes
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Exiba o contador regressivo no elemento HTML
        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Atualize o contador a cada segundo
        setTimeout(updateCountdown, 1000);
    } else {
        // Exiba uma mensagem quando a promoção terminar
        document.getElementById("countdown").innerHTML = "Promoção encerrada!";
    }
}
// Inicie a função de atualização do contador regressivo
updateCountdown();


//Referente a seção de pesquisa de voos

document.getElementById('buscarPassagens').addEventListener('click', () => {
    const origem = document.getElementById('opcoesOrigem').value;
    const destino = document.getElementById('opcoesDestino').value;
    const data1 = document.getElementById('data1').value;
    const data2 = document.getElementById('data2').value;
    const quantidadePassageiros = document.getElementById('opcoesPassageiros').value;

    if (origem && destino && data1 && data2 && quantidadePassageiros) {
        const data1Formatada = data1.split('-').reverse().join('-');
        const data2Formatada = data2.split('-').reverse().join('-');

        const url = `https://123milhas.com/v2/busca?de=${origem}&para=${destino}&adultos=${quantidadePassageiros}&ida=${data1Formatada}&volta=${data2Formatada}`;
        window.open(url, '_blank');
    }
});
