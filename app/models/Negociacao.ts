export class Negociacao {
  private _data: Date;
  private _valor: number;
  private _quantidade: number;

  constructor(data: Date, valor: number, quantidade: number) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  get data() {
    return this._data;
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }

  get volume() {
    return this._quantidade * this._valor;
  }
}
