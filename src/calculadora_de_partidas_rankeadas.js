function calcularNivelRankeada(vitorias, derrotas) {
    // Calcula o saldo Rankeadas
    const saldoVitorias = vitorias - derrotas;

    // Determina o ranker com base no saldo de vitórias
    let rankerList = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Diamante', 'Lendário', 'Imortal'];
    let ranker;

    if (saldoVitorias <= 10) {
        ranker = rankerList[0];
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        ranker = rankerList[1];
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        ranker = rankerList[2];
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        ranker = rankerList[3];
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        ranker= rankerList[4];
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        ranker = rankerList[5];
    } else if (saldoVitorias >= 101) {
        ranker = rankerList[6];
    } else {
        ranker = "Ranker não definido";
    }

    // Exibe a mensagem de saída
    console.log(`O Herói tem um saldo de vitorias de ${saldoVitorias} e está no ranker de ${ranker}`);
}

// Exemplo de uso da função
calcularNivelRankeada(10, 10);
