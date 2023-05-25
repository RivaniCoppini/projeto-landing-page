var setadireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaesquerda = window.document.getElementById("setaesquerda")


function rolarparadireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margin=top:55px"
}

function rolarparaesquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setadireita.style = "display:flex"
    setaesquerda.style = "display:none"
}