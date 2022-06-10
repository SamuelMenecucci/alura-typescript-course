//classe que irá dar os métodos das views como herança, para reaproveitamento de código.

//A view trás os métodos que serão utilizadas pelas subclasses, porém, mesmo que elas estejam utilizando os mesmos métodos, os tipos de parâmtros desses métodos são diferentes, por isso que eu utilizo o generics, passando ele entre <>, assim eu digo que esse tipo será definido na classe filha
//esse tipo é definido na hora que eu estendo a View, e passo o tipo dentro da subclasse
export class View<T> {
  //crio uma propriedade que irá armazenar um elemento html
  //com o modificador de acesso protected, as propriedades são visíveis para as subclasses, ou seja, as classes que estenderem poderão ter acesso as propriedades, mas nas instâncias essa propriedade ainda continua sendo invisível
  protected _elemento: HTMLElement;

  //pego o seletor do elemento html que será passado na instância, e com o nome dele eu armazeno na minha propriedade
  constructor(seletor: string) {
    this._elemento = document.querySelector(seletor);
  }

  //mesmo as classes que estenderem view tendo o método template, o retorno é diferente, aí que entra o polimorfismo.
  //se as filhas não chamarem o método template, o que será utilizado é o retorno que está na classe pai, que aqui está retornando um erro, mas se na classe filha esse método for chamado e o retorno for diferente, ele irá sobre escrever o retorno de erro.
  template(model: T): string {
    throw Error("Classe filha precisa implementar o métodos template");
  }

  //passo o template para dentro do elemento que foi selecionado
  //pegando os dados que serão renderizados em tela
  update(model: T): void {
    const template = this.template(model);
    this._elemento.innerHTML = template;
  }
}
