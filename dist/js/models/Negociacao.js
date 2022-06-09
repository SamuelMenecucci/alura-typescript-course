export class Negociacao {
    //um atalho do typescript é que, se eu quiser passar todas as propriedades diretamente pelo constructor, passo a visibilidade diretamente nele e tiro as atribuições que faço abaixo, deixando muito mais limpo.
    //exemplo:
    /*
      constructor(private _data: Date, private readonly valor: number, private _quantidade: number) {}
    */
    constructor(data, valor, quantidade) {
        this._data = data;
        this._quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        //o getter não permite haver atribuição de novo valor diretamente, porém, ele não impede que o valor seja alterado por algum método. por exemplo, na data, existe o método de setDate(), que pode permitir que haja alteração no valor, por isso, posso adotar a programação defensiva, criando uma cópia dos valores e passando ele para que não haja esse tipo de brecha no código.
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get volume() {
        return this._quantidade * this.valor;
    }
}
