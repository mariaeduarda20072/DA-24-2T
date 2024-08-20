/*const primeiroValor = true
const segundoValor = true 

const resultado = primeiroValor&&
segundoValor

console.log(resultado)*/

//exercicio 

//teste
/*const a = true 
const b = false 
const c = true 
//1
//const resultado = a && b

//console.log(resultado)//false

//2
//const resultado = b && c

//console.log(resultado)//false 

//3
//const resultado = a && c

//console.log(resultado)//true

//4

const resultado = a && b && c

console.log(resultado)//false*/

/*const primeiroValor = false
const segundoValor = false

const resultado = primeiroValor || 
segundoValor 

console.log(resultado)*/

//exercicio

/*const a = true
const b = false
const c = true 

//1
//const resultado = a || b

//console.log(resultado)//true

//2
//const resultado = b || c

//console.log(resultado)//true

//3
//const resultado = a || c

//console.log(resultado)//true

//4
const resultado = a || b || c

console.log(resultado)//true*/

/*const primeiroValor = false

const resultado = !primeiroValor

console.log(resultado)*/ 

//exercicio

/*const nome = prompt("qual seu nome?")
console.log("nome:",nome)
const anoNasci = prompt("qual seu ano de nascimento?")
const anoAtual = prompt("qual o ano atual?")

const idade = anoAtual - anoNasci

console.log("idade:",idade)

const maiorIdade = idade>=18
console.log("é maior de idade?", maiorIdade)

const diferencaAnos = 2050 - anoAtualconsole.log("idade em 2050:", idade + diferencaAnos)*/

//exercicio

//1 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado)

console.log("d. ", typeof resultado)