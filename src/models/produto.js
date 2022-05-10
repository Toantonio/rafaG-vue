export default class Produto {
    constructor(
        id = null,
        nome = "",
        descricao = "",
        quant = 0,
        data_alteracao = "",
        largura = 0,
        altura = 0,
        comprimento = 0,
        peso = 0
    ) {
        this.id = id,
            this.nome = nome,
            this.descricao = descricao,
            this.quant = quant,
            this.data_alteracao = data_alteracao,
            this.largura = largura,
            this.altura = altura,
            this.comprimento = comprimento,
            this.peso = peso
    }

}