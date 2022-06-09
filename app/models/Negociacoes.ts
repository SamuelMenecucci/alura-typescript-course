import { Negociacao } from "./Negociacao.js";

export class Negociacoes {
  //como atalho para a tipagem, o typescript aceita Negociacao[]
  private _negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  //o lista retorna um array, se eu deixar apenas a tipagem de Array<Negociacao>, pelo meu controller ainda fica possível manipular esse array que é retornado. Para que isso não aconteça, posso retornar uma cópia do array, passando o spread operator, para que o valor não aponte para o endereço de memória do array original, e assim, não seja modificado, ou, posso passar ReadonlyArray como tipagem, assim, dentro de controller, nem me é sugerido qualquer método que faça a manipulação do valor original, por exemplo um pop, apenas métodos que não modifiquem o array original, pois passo ele somente como leitura.
  //como atalho para o Readonly, para aproveitar o atalho da tipagem também, posso colocar  readonly Negociacao[]
  lista(): ReadonlyArray<Negociacao> {
    return this._negociacoes;
  }

  constructor() {}
}
