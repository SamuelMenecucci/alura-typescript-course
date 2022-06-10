//classe que irá dar os métodos das views como herança, para reaproveitamento de código.
//A view trás os métodos que serão utilizadas pelas subclasses, porém, mesmo que elas estejam utilizando os mesmos métodos, os tipos de parâmtros desses métodos são diferentes, por isso que eu utilizo o generics, passando ele entre <>, assim eu digo que esse tipo será definido na classe filha
//esse tipo é definido na hora que eu estendo a View, e passo o tipo dentro da subclasse
//quando eu digo que uma classe é abstrata, significa que ela não pode ser instanciada, apenas ser utilizada por subclasses
export class View {
    //pego o seletor do elemento html que será passado na instância, e com o nome dele eu armazeno na minha propriedade
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    //passo o template para dentro do elemento que foi selecionado
    //pegando os dados que serão renderizados em tela
    update(model) {
        const template = this.template(model);
        this._elemento.innerHTML = template;
    }
}
