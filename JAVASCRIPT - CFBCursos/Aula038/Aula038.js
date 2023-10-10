const caixa1=document.querySelector('#caixa1')
const btn_c=[...document.querySelectorAll('.curso')]

console.log(caixa1.getRootNode()) // nó da raiz
console.log(btn_c[0].ownerDocument) // proprietário do documento
console.log(caixa1.firstElementChild) // primeiro filho 
console.log(caixa1.lastElementChild) // último filho
console.log(caixa1.children) // todos os filhos
