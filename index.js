let nome = "Dev_samurai";
let xp = 10001;
let ferro = xp <= 1000;
let bronze = xp >= 1001 && xp <= 2000;
let prata = xp >= 2001 && xp <= 5000;
let ouro = xp >= 5001 && xp <= 7000;
let platina = xp >= 7001 && xp <= 8000;
let ascendente = xp >= 8001 && xp <= 9000;
let imortal = xp >= 9001 && xp <= 10000;
let radiante = xp >= 10001;

//Desafio feito com estrutura de condição

// if (ferro) {
//     console.log(`O Herói de nome ${nome} está no nível de Ferro`);

// } else if (bronze) {
//     console.log(`O Herói de nome ${nome} está no nível de Bronze`);

// } else if (prata) {
//     console.log(`O Herói de nome ${nome} está no nível de Prata`);

// } else if (ouro) {
//     console.log(`O Herói de nome ${nome} está no nível de Ouro`);

// } else if (platina) {
//     console.log(`O Herói de nome ${nome} está no nível de Platina`);

// } else if (ascendente) {
//     console.log(`O Herói de nome ${nome} está no nível de Ascendente`);

// } else if (imortal) {
//     console.log(`O Herói de nome ${nome} está no nível de Imortal`);

// } else if (radiante) {
//     console.log(`O Herói de nome ${nome} está no nível de Radiante`);

// } else {
//     console.log("Nível não definido");
// }


// Switch case

// switch (true) {
//     case ferro:
//         console.log(`O Herói de nome ${nome} está no nível de Ferro`)
//         break;
//     case bronze:
//         console.log(`O Herói de nome ${nome} está no nível de Bronze`)
//         break;
//     case prata:
//         console.log(`O Herói de nome ${nome} está no nível de Prata`)
//         break;
//     case ouro:
//         console.log(`O Herói de nome ${nome} está no nível de Ouro`)
//         break;
//     case platina:
//         console.log(`O Herói de nome ${nome} está no nível de Platina`)
//         break;
//     case ascendente:
//         console.log(`O Herói de nome ${nome} está no nível de Ascendente`)
//         break;
//     case imortal:
//         console.log(`O Herói de nome ${nome} está no nível de Imortal`)
//         break;
//     case radiante:
//         console.log(`O Herói de nome ${nome} está no nível de Radiante`)
//         break;
//     default:
//         console.log("Nível não definido");
// }

// while

// while (true) {
//     if (ferro) {
//         console.log(`O Herói de nome ${nome} está no nível de Ferro`)
//         break;
//     } else if (bronze) {
//         console.log(`O Herói de nome ${nome} está no nível de Bronze`)
//         break;
//     } else if (prata) {
//         console.log(`O Herói de nome ${nome} está no nível de Prata`)
//         break;
//     } else if (ouro) {
//         console.log(`O Herói de nome ${nome} está no nível de Ouro`)
//         break;
//     } else if (platina) {
//         console.log(`O Herói de nome ${nome} está no nível de Platina`)
//         break;
//     } else if (ascendente) {
//         console.log(`O Herói de nome ${nome} está no nível de Ascendente`)
//         break;
//     } else if (imortal) {
//         console.log(`O Herói de nome ${nome} está no nível de Imortal`)
//         break;
//     } else if (radiante) {
//         console.log(`O Herói de nome ${nome} está no nível de Radiante`)
//         break;
//     } else {
//         console.log("Nível não definido")
//         break;
//     }
// }

//Do while

// do {
//     if (ferro) {
//         console.log(`O Herói de nome ${nome} está no nível de Ferro`);
//         break;
//     } else if (bronze) {
//         console.log(`O Herói de nome ${nome} está no nível de Bronze`);
//         break;
//     } else if (prata) {
//         console.log(`O Herói de nome ${nome} está no nível de Prata`);
//         break;
//     } else if (ouro) {
//         console.log(`O Herói de nome ${nome} está no nível de Ouro`);
//         break;
//     } else if (platina) {
//         console.log(`O Herói de nome ${nome} está no nível de Platina`);
//         break;
//     } else if (ascendente) {
//         console.log(`O Herói de nome ${nome} está no nível de Ascendente`);
//         break;
//     } else if (imortal) {
//         console.log(`O Herói de nome ${nome} está no nível de Imortal`);
//         break;
//     } else if (radiante) {
//         console.log(`O Herói de nome ${nome} está no nível de Radiante`);
//         break;
//     } else {
//         console.log("Nível não definido");
//         break;
//     }
// } while (true);

// for each

const niveis = [ferro, bronze, prata, ouro, platina, ascendente, imortal, radiante];

for (const nivel of niveis) {
    if (nivel) {
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
        break;
    }
}

//Se nenhuma condiçao for encontrada
console.log("Nível não definido");

