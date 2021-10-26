let texto = document.querySelector('#texto-tarefa')
let lista = document.querySelector('#lista-tarefas')
let btn = document.createElement('button')
btn.id = 'criar-tarefa'
btn.innerHTML = 'Criar'
document.querySelector('body').appendChild(btn)

function adicionarTarefa() {
    let cLi = document.createElement('li')
    cLi.innerText = texto.value
    cLi.className = 'listItem'
    lista.appendChild(cLi)
    texto.value = ''
    let item = document.querySelectorAll('.listItem')
    for (i of item) {
        i.addEventListener('click', selecionar)
        i.addEventListener('dblclick', completo)
    }
}

btn.addEventListener('click', adicionarTarefa)

function selecionar(e) {
    if (document.querySelector('.selected') !== null) {
        let antigoSel = document.querySelector('.selected')
        antigoSel.classList.remove('selected')
    }
    e.target.classList.add('selected')
}

function completo(e) {
    if (e.target.className == 'listItem completed selected') {
        e.target.classList.remove('completed')
    } else {
        e.target.classList.add('completed')
    }
}
function apagar() {
    let item2 = document.querySelector('ol')
    item2.innerHTML = ''
}


let btn2 = document.createElement('button')
btn2.id = 'apaga-tudo'
btn2.innerText = 'Apagar tudo'
document.querySelector('body').appendChild(btn2)
btn2.addEventListener('click', apagar)

function apagarComp() {
    let item3 = document.querySelectorAll('.completed')
    for (i of item3) {
    lista.removeChild(i)
    }
}

let btn3 = document.createElement('button')
btn3.id = 'remover-finalizados'
btn3.innerText = 'Apagar completos'
document.querySelector('body').appendChild(btn3)
btn3.addEventListener('click', apagarComp)
