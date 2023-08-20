var amigo = 
{nome: 'José',
sexo: 'faço',
peso: '86.4',
engordar(p=0) {
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)