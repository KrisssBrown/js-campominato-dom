// console.log('Prato Fiorito')


const btnEl = document.getElementById('play-button')
const colInput = document.getElementById('col-input')
const rowInput = document.getElementById('row-input')
const gridEl = document.getElementById('grid')

btnEl.addEventListener('click', startGame)

function resetGame() {
    // azzerare il punteggio

    // svuotare la griglia
    gridEl.innerHTML = ''


    // eliminare eventuali messaggi di game over...
}


function dimension() {

    let colonne = colInput.value
    let righe = rowInput.value
    const numeroCelle = colonne * righe


    console.log(colonne, righe, numeroCelle)

    const grigliaEl = document.getElementById('grid')

    console.log(grigliaEl)

    for (let i = 0; i < numeroCelle; i++) {
        let num = i + 1
        console.log(num)

        let cellaEl = document.createElement('div')
        cellaEl.innerHTML = num
        cellaEl.classList.add('cella')
        grigliaEl.append(cellaEl)

        // CELLAELEMENT STYLE
        cellaEl.style.width = 'calc(100% / ' + colonne + ')'
        cellaEl.style.height = 'calc(100% / ' + righe + ')'
        console.log(cellaEl)
    }

    const bombe = []
    bombe.lenght = (colonne + righe) * 2



    let randomBoom = []
    let bombIndex = bombe.includes(randomBoom[i])

    

    while(bombIndex = true){
        randomBoom = Math.floor(Math.random() * numeroCelle)

        bombe.push (randomBoom)
        // console,log (randomBoom)
    }

    


    // for (let i = 0; i < numeroCelle/2; i++) { 
    //     let randomBoom = Math.floor(Math.random() * numeroCelle)

    //     bombe.push (randomBoom)
    // }

    console.log('numero Bombe', bombe.length)

}






function onClick(event) {
    console.log(event)
    console.log(event.target)
    console.log(this)
    console.log(event.target === this)
    // const cella = event.target
    const cella = this
    console.log(cella.innerHTML)

    // const quadrato = parseInt(cella.innerHTML) ** 2
    // console.log(quadrato)

    cella.classList.add('bg-confirmed')
    cella.removeEventListener('click', onClick)
    // console.log(i + 1)
}





function startGame() {
    // btnEl.classList.add('d-none')
    // colInput.classList.add('d-none')
    // rowInput.classList.add('d-none')
    gridEl.classList.remove('flex-column', 'gap-3')

    resetGame()
    dimension()





    const celleElements = document.querySelectorAll('.cella')
    // console.log(celleElements)

    for (let i = 0; i < celleElements.length; i++) {
        const cella = celleElements[i]

        // cella.addEventListener('click', function () {
        // 	console.log(i + 1)
        // 	// const cella = ''
        // 	console.log(cella)
        // })

        cella.addEventListener('click', onClick)
    }





    

}