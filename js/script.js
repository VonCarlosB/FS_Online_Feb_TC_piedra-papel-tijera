const result = document.getElementById('resultados')
const userCounter = document.getElementById('contador-usuario')
const computerCounter = document.getElementById('contador-ordenador')
const options = []
let playerPoints = 0
let computerPoints = 0

for (const element of document.querySelectorAll(".boton-jugada")) {
    let election = element.getAttribute('data-jugada')
    element.addEventListener('click', function() {
        jugada(election)
    })
    options.push(election)
}

function jugada(election) {
    let ans = options[Math.floor(Math.random()*3)]
    result.innerText = 'Has elegido '+election+' y la máquina ha elegido '+ans+'\n\n'
    checkResults(ans, election)
}

function checkResults(ans, election) {
    if(election === ans){
        result.innerText += 'Empate a '+ans
        result.style.backgroundColor = 'beige'
    }else if(election === 'tijera' && ans ==='piedra' || election==='piedra' && ans ==='papel' || election==='papel' && ans ==='tijera'){
        result.innerText += 'Has perdido con '+election+' contra '+ans
        computerPoints++
        computerCounter.innerText = 'Puntos de la máquina: '+computerPoints
        result.style.backgroundColor = 'lightcoral'
    }else{
        result.innerText += 'Has ganado con '+election+' contra '+ans
        playerPoints++
        userCounter.innerText = 'Tus puntos: '+playerPoints
        result.style.backgroundColor = 'lightgreen'
    }
    changeScale()
}

function changeScale() {
    let dif = playerPoints - computerPoints
    console.log(dif)
    userCounter.style.width = (50+dif*5)+'%'
    computerCounter.style.width = (50-dif*5)+'%'
    setTimeout(() => {
        reloadPage(dif)
    }, 500);
}

function reloadPage(dif) {
    if(dif >= 10){
        if(window.confirm('Enhorabuena, has ganado, tienes mucha suerte.\n¿Otra vez?')){
            location.reload()
        }
    }
    if(dif <= -10){
        if(window.confirm('Vaya... Has perdido, más suerte la próxima vez.\n¿Otra vez?')){
            location.reload()
        }
    }
}