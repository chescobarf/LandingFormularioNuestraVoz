
let frases = [
    `"Un Chile mas inclusivo"`,
    `"Un pais con las mismas posibilidades para todas"`,
    `"Un Chile seguro para todas"`,
    `"Con politicas mas justas"`,
    `"Que se respeten todas las minorias sexuales"`,
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



