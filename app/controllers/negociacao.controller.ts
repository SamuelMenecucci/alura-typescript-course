import { Negociacao } from "../models/Negociacao.js";

export class NegociacaoController {
  private _inputData;
  private _inputQuantidade;
  private _inputValor;

  constructor() {
    this._inputData = document.getElementById("data");
    this._inputQuantidade = document.getElementById("quantidade");
    this._inputValor = document.getElementById("valor");
  }

  adiciona() {
    const negociacao = new Negociacao(
      new Date(this._inputData.value).toLocaleString("pt-br", {
        timeZone: "utc",
      }),
      +this._inputQuantidade.value,
      +this._inputValor.value
    );
  }
}
