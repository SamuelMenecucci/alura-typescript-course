export class Negociacao {
  private _data: Date;

  //caso eu queria deixar a propriedade exposta porém sem permitir novas atribuições, posso utilizar o readonly, e deixa-la como public, assim o valor dessa propriedade será setado apenas quando a classe for instanciada, e após isso será disponível somente para leitura. assim, não preciso de um getter para pegar o valor dela, já que ela também não está mais privada. Além disso, posso deixar o nome sem o underscore, pois o underscore é por não ser permitido termos nomes de getters e propriedades idênticos, como eu não preciso mais do getter, posso fazer a alteração no nome da propriedade também.
  public readonly valor: number;
  private _quantidade: number;

  //um atalho do typescript é que, se eu quiser passar todas as propriedades diretamente pelo constructor, passo a visibilidade diretamente nele e tiro as atribuições que faço abaixo, deixando muito mais limpo.
  //exemplo:
  /*
    constructor(private _data: Date, private readonly valor: number, private _quantidade: number) {}
  */
  constructor(data: Date, valor: number, quantidade: number) {
    this._data = data;
    this._quantidade = quantidade;
    this.valor = valor;
  }

  get data(): Date {
    //o getter não permite haver atribuição de novo valor diretamente, porém, ele não impede que o valor seja alterado por algum método. por exemplo, na data, existe o método de setDate(), que pode permitir que haja alteração no valor, por isso, posso adotar a programação defensiva, criando uma cópia dos valores e passando ele para que não haja esse tipo de brecha no código.
    const data = new Date(this._data.getTime());

    return data;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get volume(): number {
    return this._quantidade * this.valor;
  }

  //o static faz o método virar um método de classe e não precisa de uma instancia para ser chamado
  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ) {
    const exp = /-/g;
    //o constructor Date aceita valores separados por virgulas e o input date trás separado por hífen, por isso utilizo o replace e passo a expressão regular que criei
    const date = new Date(dataString.replace(exp, ","));

    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);

    return new Negociacao(date, quantidade, valor);
  }
}
