class Forca {
  //definindo o contrutor da forca
  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta.split('') //guardando a palavra secreta na forma de array
    //
    this.palavra = []
    for (let i = 0; i < palavraSecreta.length; i++) {
      this.palavra.push('_')
    }
    this.letrasChutadas = []
    this.vidas = 6
  }

  chutar(letra) {
    //checando se a entrada é apensa uma letra
    if (letra.length === 1) {
      //checando se a letra ja foi chutada anteriormente
      if (!this.letrasChutadas.find(l => l === letra)) {
        // pegando a(s) posição(ões) da letra na palavra secreta
        let indexes = this.palavraSecreta.reduce(
          (idxArr, secretLetter, actIdx) => {
            if (secretLetter === letra) idxArr.push(actIdx)
            return idxArr
          },
          []
        )
        // se o array onde guarda as posições for vazio quer dizer que a palavra não possue nenhuma ocorrência dessa letra
        if (indexes.length === 0) {
          this.vidas--
        } else {
          //revelando as posiçoes onde aparece a letra
          for (let i = 0; i < indexes.length; i++)
            this.palavra[indexes[i]] = letra
        }
        //salvando a letra na lista de letra chutadas
        this.letrasChutadas.push(letra)
      }
    }
  }

  buscarEstado() {
    if (this.palavra.join('') === this.palavraSecreta.join('') && vidas > 0)
      return 'ganhou'
    if (this.vidas === 0) return 'perdeu'
    return 'aguardando chute'
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra // Deve ser um array c''om as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca
