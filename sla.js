let nomes = ["Gui" , "murilo" , "rafael" , "oliver" , "biel"]
console.log(nomes)

nomes.push("joão p")
console.log(nomes)

nomes.unshift("zoiuda")
console.log(nomes)

nomes.push("Samuel" , "Rayssa" , "Vitinho" , "Pedro" , "Caleb")
console.log(nomes)

console.log(nomes[4])

let pets = nomes.shift()
console.log(nomes)

console.log(pets)


//e se eu precisar validar que uma informação existe em um array?
console.log(nomes.includes("Samuel"))

//e se eu precisar saber em que posição (indice) essa informação esta?
console.log(nomes.indexOf("Samuel"))

//e se eu precisar percorrer todo o array?
// "=>" arrow function usado para definir uma função anonima
// () => {} declaração da função anonima
//forEach = função anonima da pra usar if dentro dele
nomes.forEach((linha,contador) => {
    console.log("O" + (contador + 1) + "nome registrado é:  " + linha)
    
})