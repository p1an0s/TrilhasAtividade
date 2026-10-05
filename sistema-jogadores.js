const prompt = require("prompt-sync")();

let time = [];

let continuar = true;

function mostrarMenu() {
    console.log("======================");
    console.log("-------- SISTEMA DE GAMERS --------");
    console.log("1 - Cadastrar");
    console.log("2 - Deletar");
    console.log("3 - Mostrar Equipe");
    console.log("4 - Cálculo de Média da Equipe");
    console.log("5 - Atualizar pontuação");
    console.log("6 - Sair")
    console.log("======================");
}

function mostrarEquipe() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    for (let i = 0; i < time.length; i++) {
        let jogador = time[i];

        console.log(
            `${i + 1}. ${jogador.nome} | Função: ${jogador.funcao} | Pontuação: ${jogador.pontuacao}`
        );
    }
}

function cadastrarJogador() {
    let nomeJogador = prompt("Digite o nome do jogador: ");

    let funcaoJogador = prompt("Digite a função no time: ");

    let pontuacaoJogador = Number(prompt("Digite a pontuação: "));

    if (isNaN(pontuacaoJogador)) {
        console.log("Pontuação inválida");
        return;
    }

    let recruta = {
        nome: nomeJogador,
        funcao: funcaoJogador,
        pontuacao: pontuacaoJogador
    };

    time.push(recruta);

    console.log(`Jogador ${nomeJogador} foi cadastrado com sucesso`);
    console.log("----------------");
}

function deletarJogador() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado");
        return;
    }

    let nomeDeletado = prompt("Digite o nome a ser deletado: ");

    let indexDeletado = -1;

    for (let i = 0; i < time.length; i++) {
        if (time[i].nome === nomeDeletado) {
            indexDeletado = i;
            break;
        }
    }

    if (indexDeletado === -1) {
        console.log("Jogador não encontrado");
        return;
    }

    time.splice(indexDeletado, 1);

    console.log("Jogador deletado com sucesso");
    console.log("-------------------------");
}

function calculoDaMedia() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    let totalPontos = 0;

    for (let i = 0; i < time.length; i++) {
        totalPontos += time[i].pontuacao;
    }

    let mediaPontos = totalPontos / time.length;

    console.log("O time possui uma pontuação média de:", mediaPontos);
}

function atualizarPontuacao() {

    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    let nomeDesejado = prompt("Digite o jogador para mudar a pontuação: ");

    for (let i = 0; i < time.length; i++) {

        if (nomeDesejado === time[i].nome) {

            let pontosAdicionais = Number(
                prompt("Quantos pontos ele ganhou: ")
            );

            if (isNaN(pontosAdicionais)) {
                console.log("Pontuação inválida.");
                return;
            }

            time[i].pontuacao += pontosAdicionais;

            console.log(
                `Player ${time[i].nome} agora tem ${time[i].pontuacao} pontos`
            );

            return;
        }
    }

    console.log(`Jogador ${nomeDesejado} não foi encontrado`);
}

while (continuar === true) {
    mostrarMenu();

    let opcao = Number(prompt("Digite a sua opção: "));

    switch (opcao) {

        case 1:
            cadastrarJogador();
            break;

        case 2:
            deletarJogador();
            break;

        case 3:
            mostrarEquipe();
            break;

        case 4:
            calculoDaMedia();
            break;

        case 5:
            atualizarPontuacao();
            break;

        case 6 :
            continuar = false;
        break;

        default:
            console.log("Digite uma opção válida");
            break;
    }
}

console.log("Programa encerrado.");