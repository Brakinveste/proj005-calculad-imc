
let cxAltura = document.querySelector('#altura')


let formulario = document.querySelector('form')

let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')



let cxImc = document.querySelector('#resu-imc')

let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')



let btnEnviar = document.querySelector('#btn-enviar')

let btnLimpar = document.querySelector('#btn-limpar')



cxIdade.addEventListener('keypress', (ll) => {
    if (ll.key === '.' || ll.key === '+' || ll.key === '-' || ll.key === 'e' || ll.key === ',') {
        ll.preventDefault();
    }
})

cxPeso.addEventListener('keypress', (ll) => {
    if (ll.key === '.' || ll.key === '+' || ll.key === '-') {
        ll.preventDefault();
    }
})


btnEnviar.addEventListener('click', function
(e) {
    let nome = cxNome.value
    let tidade = cxIdade.value
    
    let peso = cxPeso.value
    let taltura = cxAltura.value

    let idade = parseInt(tidade)
    let altura = parseFloat(taltura).toFixed(2)

    let imc = (peso / (altura * altura)).toFixed(1)

    console.log(nome)
    console.log(idade)
    console.log(peso)
    console.log(altura)
    console.log(imc)

    cxImc.value = imc
    let sit = situacaoDoPeso(imc)
    aviso.textContent = sit

    let pessoa = {
        n : nome,
        i : idade,
        p : peso,
        a : altura,
        im : imc,
        s : sit
    }

    console.log(pessoa)

    dados[1].textContent = pessoa.n
    dados[2].textContent = pessoa.i + " anos"
    dados[3].textContent = pessoa.p + " Kg"
    dados[4].textContent = pessoa.a + " m"
    dados[5].textContent = pessoa.im + " = " + pessoa.s

    e.preventDefault()

})

function situacaoDoPeso(imc) {
    let situacao = ''

    if (imc < 18.5) {
        situacao = 'Baixo peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Peso normal'
    } else if (imc > 24.9 && imc <= 29.9) {
        situacao = 'Sobrepeso'
    } else if (imc > 29.9 && imc <= 34.9) {
        situação = 'Obesidade I'
    } else if (imc > 34.9 && imc <= 39.9) {
        situacao = 'Obesidade II'
    } else if (imc > 39.9) {
        situacao = 'Obesidade III'
    } else {
        situacao = 'Informe seu peso correto.'
    }

    return situacao
}