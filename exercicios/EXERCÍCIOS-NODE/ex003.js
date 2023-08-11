var idade = 67
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Parado ai, comediante. Menores de 16 não tem a opção de voto.')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opicional.')
} else {
    console.log('Voto obrigatório')
}
