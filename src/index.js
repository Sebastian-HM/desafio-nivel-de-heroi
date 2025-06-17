// Variáveis para inicio do desafio
let nomeHeroi = "Cavaleiro de Gotam";
let xp = 9600; // exemplo de XP do herói
let nivelHeroi = ""; // Definido segundo a XP

// Estrutura de decisão para definir o nível do herói
if (xp <= 1000) {
    nivelHeroi = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivelHeroi = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivelHeroi = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivelHeroi = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivelHeroi = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivelHeroi = "Imortal";
} else if (xp >= 10001) {
    nivelHeroi = "Radiante";
}

// Mensagem final
let mensagem = `O Herói ${nomeHeroi} atingiu o nível ${nivelHeroi}`;

// Mensagem no console
console.log(mensagem);