import { DiasDaSemana } from "../enums/dias-da-semana.js";
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

  public adiciona(): void {
    //como o método criaDe é um método estático da classe Negociacao, não preciso instanciar a classe para poder usa-lo. Ele agora é um método de classe
    const negociacao = Negociacao.criaDe(
      this._inputData.value,
      this._inputQuantidade.value,
      this._inputValor.value
    );

    //lógica para aceitar somente dias úteis. o getDay retorna o dia da semana, começando de 0, que é domingo e indo até 6, que é sábado
    if (!this.ehDiaUtil(negociacao.data)) {
      this._mensagemView.update(
        "Apenas negociações em dias úteis são aceitas. "
      );
      return;
    }
    this._negociacoes.adiciona(negociacao);
    this.limparFormulario();
    this.atualizaView();
  }

  private limparFormulario(): void {
    this._inputData.value = "";
    this._inputQuantidade.value = "";
    this._inputValor.value = "";

    this._inputData.focus();
  }

  private atualizaView(): void {
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update("Negociação adicionada com sucesso");
  }

  private ehDiaUtil(data: Date): boolean {
    return (
      data.getDay() > DiasDaSemana.DOMINGO &&
      data.getDay() < DiasDaSemana.SABADO
    );
  }
}
