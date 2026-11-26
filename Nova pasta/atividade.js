//1
let chamada = ["Ana" , "Bruno" , "Carla" , "Diego" , "Elena" ]

function fnExibirChamada(lista){
   if(lista == chamada ){
    console.log(chamada.length)
    console.log(chamada[0,4])
   }}

//2

let listas = ["Teclado Mecanico" , "Mouse Gamer" ]


    function fnAdicionarProduto(lista , novoItem) {


lista.push(novoItem)
 console.log(listas)
 
}


//3

let filaDeEspera = ["Marcos" , "Juliana" , "Roberto"]

function fnEncaixarPrioridade(fila, nomeDoPaciente){

fila.unshift(nomeDoPaciente)
console.log(nomeDoPaciente , fila )

} 


//4


     
function fnChamarProximo(fila){
    let pessoaChamada = filaDeEspera.shift()
if (fila == filaDeEspera){
console.log("quem ficou aguardando: " + fila , "quem foi chamada: " + pessoaChamada)


}


}



//5

let textosimples = ["Escreveu título" , "Aplicou negrito" , "Inseriu tabela"]

function fnDesfazerAcao(lista){

lista.pop(textosimples)
console.log(textosimples)

}

//6

let itens = ["Camiseta", "Calça", "Tênis","Boné"]

function fnVerificarEstoque(lista){
     lista.length[itens]
    console.log(lista)
}

//7


let listaDeConvidados = ["Lucas", "Mariana", "Thiago", "Beatriz"]

function fnEstaNaLista(lista,nome){
    if(lista.includes(nome)){
        console.log(nome + " Estão na lista")
    }else{
        console.log(nome + " Não estão na lista")
    }
}

//8

let produtos = ["Arroz", "Feijão", "Açúcar", "Café", "Sal"]
 
function fnConsultarCorredor(lista,item){
   if(lista.includes(item) && lista.length){
    console.log(item + " está na lista corredor " + produtos.indexOf(item))
   }else{
    console.log(item + " não está na lista ")
   }
}
 
//9

let tabelaDePreco = [ 15.00 , 25.00 , 40.00]

function fnAtualizarPreco(lista,indice,novoValor){

if((lista.length -1) < indice) {

console.log(` Produto Não encontrado! `)
return

}
lista[indice] = novoValor
console.log(`Novos valores de preço ${lista}`)

}

fnAtualizarPreco(tabelaDePreco, 1,28.50)
fnAtualizarPreco(tabelaDePreco, 2, 43.49)

//10

let notas = []

function fnCriarBoletim(nota1 , nota2 , nota3){
    notas.push(nota1)
    console.log(nota1)

   notas.push(nota2)
   console.log(nota2)

   notas.push(nota3)
   console.log(nota3)

}

