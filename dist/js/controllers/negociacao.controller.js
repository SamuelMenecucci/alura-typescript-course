import { Negociacao } from "../models/Negociacao.js";
export class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
    }
    criaNegociacao() {
        const exp = /-/g;
        //o constructor Date aceita valores separados por virgulas e o input date trás separado por hífen, por isso utilizo o replace e passo a expressão regular que criei
        const date = new Date(this._inputData.value.replace(exp, ","));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
}
