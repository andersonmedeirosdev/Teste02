const equipamentos = []
const numeroDeSerie = []
const fabricante = []

function add() {
    let addInput = document.getElementById('eqp')
    addEqp(addInput.value)
}

function addEqp(nomeNovoEqp) {
    equipamentos.push(nomeNovoEqp)
}

function read() {
    let resultado = listarEquipamentos()
    let elLista = document.getElementById("listaeqp")
    elLista.innerHTML = resultado
}

function listarEquipamentos() {
    let returnString = ''
    for(let nome of equipamentos) {
        returnString+=nome+', '
    }
    return returnString
}

function addnds() {
    let addInputNds = document.getElementById('nds')
    addNewNds(addInputNds.value)
}

function addNewNds(nomeNovoNds) {
    numeroDeSerie.push(nomeNovoNds)
}

function readnds() {
    let resultadoNds = listarNds()
    let listarNdSerie = document.getElementById("listands")
    listarNdSerie.innerHTML = resultadoNds
}

function listarNds() {
    let returnStringNds = ''
    for(let nomends of numeroDeSerie) {
        returnStringNds+=nomends+', '
    }
    return returnStringNds
}

function addfabri() {
    let addInputFabri = document.getElementById('fabri')
    addNewFabri(addInputFabri.value)
}

function addNewFabri(nomeNovoFabri) {
    fabricante.push(nomeNovoFabri)
}

function readFabri() {
    let resultadoFabri = listarFabri()
    let listaFabri = document.getElementById("listafabri")
    listaFabri.innerHTML = resultadoFabri
}

function listarFabri() {
    let returnStringFabri = ''
    for(let nomeFabri of fabricante) {
        returnStringFabri+=nomeFabri+', '
    }
    return returnStringFabri
}