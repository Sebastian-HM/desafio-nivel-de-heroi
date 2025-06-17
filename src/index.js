// Define as variáveis para inicio
let nome = "Batman";
let xp = 2600; // XP do herói (valor de exemplo)
let nivel = ""; // Será definido baseado no XP

// Estrutura de decisão para classificar o herói
if (xp <= 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else if (xp >= 10001) {
    nivel = "Radiante";
}

// Monta a mensagem final com template literals (modo moderno)
let mensagem = `O Herói ${nome} está no ${nivel}`;

// Exibe a mensagem no console
console.log(mensagem);