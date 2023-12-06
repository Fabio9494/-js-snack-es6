// SNACK 1
let bikes =[
    {
        nome: "bike veloce",
        peso: 8
    },
    {
        nome: "bike abbastanza veloce",
        peso: 9
    },
    {
        nome: "bike veloce ma non troppo",
        peso: 11
    },
    {
        nome: "bike velocissima",
        peso: 6
    },
    {
        nome: "bike poco veloce",
        peso: 13
    },
]

let pesoBike=999999;
let nomeBike;

bikes.forEach((elem)=>{
    let {nome,peso} = elem;
    if(peso<pesoBike){
        pesoBike=peso;
        nomeBike=nome;
    }
})

console.log(`La bici piu leggera è la "${nomeBike}" e pesa ${pesoBike} kg`)

// SNACK 2
let squadre =[
    {
        nome: "Juventus",
        falliSubiti: 0,
        punti: 0
    },
    {
        nome: "Inter",
        falliSubiti: 0,
        punti: 0
    },
    {
        nome: "Milan",
        falliSubiti: 0,
        punti: 0
    },
    {
        nome: "Roma",
        falliSubiti: 0,
        punti: 0
    },
    {
        nome: "Atalanta",
        falliSubiti: 0,
        punti: 0
    },
]

let falliSubitiPerSuadra=[];

squadre.forEach((elem)=>{
    elem.falliSubiti=Math.floor(Math.random() * 100);
    elem.punti=Math.floor(Math.random() * 100);
    
    let {nome,falliSubiti}=elem;
    let newItem={
        nomeSquadra:nome,
        falliSub:falliSubiti
    }
    falliSubitiPerSuadra.push(newItem);
});
    
console.log(falliSubitiPerSuadra);