//[] -> significa array 
// os valors são esperados por virgula (,)

let nomes = ["Isa" ,"Victor", "Pedro" ,"Samuel" , "Geovana"]
console.log(nomes)
console.log(nomes [0])// consulta de posição (obs. a contagem de array começa em zero)

nomes[4] = "Caleb" // substituindo o valor em posição especifica

console.log(nomes)
console.log(nomes.length)// conta quantas informações eu tenho no meu array

nomes[nomes.length] = "Geovana"

console.log(nomes)

nomes.push("Nicolas") // push adiciona mais um valor ao FINAL do array
console.log(nomes)

nomes.unshift("Ro") // adiciona um valor no COMEÇO do array
console.log(nomes)

// remover valores
//.pop -> remove o ultimpo valor array
//.shift -> remove o primeiro valor array

let ultimoNome = nomes.pop()
console.log(nomes)
console.log(ultimoNome)

let primeiroNome = nomes.shift()
console.log(nomes)
console.log(primeiroNome)

nomes.pop()
console.log(nomes)

nomes.shift()
console.log(nomes)