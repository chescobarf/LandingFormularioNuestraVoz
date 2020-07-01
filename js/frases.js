
let frases = [
    `"Un Chile mas inclusivo"`,
    `"Un país con las mismas posibilidades para todas"`,
    `"Un Chile seguro para todas"`,
    `"Con políticas mas justas"`,
    `"Que se respeten todas las minorías sexuales"`,
    `"Salir sin miedos"`,
    `"Ser tratada igual que todos"`
]

let frase=document.querySelector("#frase");
let container=document.querySelector("#containerFrases")

function cambiar(){
    aleat = Math.random() * (frases.length)
    aleat = Math.floor(aleat)
    frase.textContent=frases[aleat]
}

setInterval(cambiar, 1500);



