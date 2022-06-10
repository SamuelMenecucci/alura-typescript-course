import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/menssagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes: Negociacoes = new Negociacoes();
  private _mensagemView = new MensagemView("#mensagemView");

  //quando houve a instância do controller, eu armazeno a instância da view, passando o id do elemento que iria colocar o template, que foi o elemento criado no html pelo app.
  private _negociacoesView = new NegociacoesView("#negociacoesView");

  constructor() {
    this._inputData = document.querySelector("#data");
    this._inputQuantidade = document.querySelector("#quantidade");
    this._inputValor = document.querySelector("#valor");

    //assim que a instância do controller ocorrer e rodar, rodo o update
    //passo negociacoes que é aonde contém os dados, e quero que os dados que forem inseridos sejam refletidos em tela, sendo mostrados na tabela
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();

    this._negociacoes.adiciona(negociacao);
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update("Negociação adicionada com sucesso");
    console.log(this._negociacoes.lista());

    this.limparFormulario();
  }

  criaNegociacao(): Negociacao {
    const exp = /-/g;
    //o constructor Date aceita valores separados por virgulas e o input date trás separado por hífen, por isso utilizo o replace e passo a expressão regular que criei
    const date = new Date(this._inputData.value.replace(exp, ","));

    const quantidade = parseInt(this._inputQuantidade.value);
    const valor = parseFloat(this._inputValor.value);

    return new Negociacao(date, quantidade, valor);
  }

  limparFormulario(): void {
    this._inputData.value = "";
    this._inputQuantidade.value = "";
    this._inputValor.value = "";

    this._inputData.focus();
  }
}
