//Declaração de variáveis
let herois = [
    ["Homem-Aranha", 4.867],
    ["Professor-X", 6.789],
    ["Deadpool",  9.457],
    ["Hulk", 12.568],
    ["Bucky Barners", 1.578]
];

console.log("|-----------------------------| Classificador de Nível de Herói |-----------------------------|");
console.log("|*********************************************************************************************|");

herois.forEach(element => {
    let nome = element[0];
    let nivel = "";

    if(element[1] <= 1.000){
        nivel = "Ferro";
    } else if(element[1] >= 1.001 && element[1] <= 2.000){
        nivel = "Bronze"
    } else if(element[1] >= 2.001 && element[1] <= 5.000){
        nivel = "Prata"
    } else if(element[1] >= 5.001 && element[1] <= 7.000){
        nivel = "Ouro"
    } else if(element[1] >= 7.001 && element[1] <= 8.000){
        nivel = "Platina"
    } else if(element[1] >= 8.001 && element[1] <= 9.000){
        nivel = "Ascendente"
    } else if(element[1] >= 9.001 && element[1] <= 10.000){
        nivel = "Imortal"
    } else if(element[1] >= 10.0001){
        nivel = "Radiante"
    };

    // console.log(`|-> O Herói de nome ${nome} está no nível de ${nivel}`);
    console.log("|-> O Herói de nome "+ nome +" está no nível de "+ nivel);

});

console.log("|_____________________________________________________________________________________________|");