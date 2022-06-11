//classe que irá dar os métodos das views como herança, para reaproveitamento de código.

//A view trás os métodos que serão utilizadas pelas subclasses, porém, mesmo que elas estejam utilizando os mesmos métodos, os tipos de parâmtros desses métodos são diferentes, por isso que eu utilizo o generics, passando ele entre <>, assim eu digo que esse tipo será definido na classe filha
//esse tipo é definido na hora que eu estendo a View, e passo o tipo dentro da subclasse
//quando eu digo que uma classe é abstrata, significa que ela não pode ser instanciada, apenas ser utilizada por subclasses
export abstract class View<T> {
  //crio uma propriedade que irá armazenar um elemento html
  //com o modificador de acesso protected, as propriedades são visíveis para as subclasses, ou seja, as classes que estenderem poderão ter acesso as propriedades, mas nas instâncias essa propriedade ainda continua sendo invisível
  protected _elemento: HTMLElement;
  private _escapar = false;

  //pego o seletor do elemento html que será passado na instância, e com o nome dele eu armazeno na minha propriedade
  //o ponto de interrogação em typescript diz que a propriedade pode ser opcional e não obrigatória, porém, ele não funciona no primeiro parâmetro, somente nos últimos. um parâmetro obrigatório não pode ter um parâmetro opcional antes dele.
  constructor(seletor: string, escapar?: boolean) {
    this._elemento = document.querySelector(seletor);

    if (escapar) {
      this._escapar = escapar;
    }
  }

  //mesmo as classes que estenderem view tendo o método template, o retorno é diferente, aí que entra o polimorfismo.
  //se as filhas não chamarem o método template, o que será utilizado é o retorno que está na classe pai, que aqui está retornando um erro, mas se na classe filha esse método for chamado e o retorno for diferente, ele irá sobre escrever o retorno de erro.
  // template(model: T): string {
  //   throw Error("Classe filha precisa implementar o métodos template");
  // }
  //para que eu não precise fazer da forma a cima, posso dizer que o método é abstrato, assim, torno ele obrigatório quando alguma subclasse herdar view. da forma acima, o erro será visto apenas em run time, e aqui eu o torno visível em ambiente de desenvolvimento.
  protected abstract template(mode: T): string;

  //passo o template para dentro do elemento que foi selecionado
  //pegando os dados que serão renderizados em tela
  public update(model: T): void {
    let template = this.template(model);

    //alguns navegadores já protegem por padrão e outros não a possibilidade de colocar uma tag script dentro dessa string do template, que vai dentro do innerHTML, mas para aumentar a segurança, crio um método para que se alguém adicionar um script no código eu removo ele
    //aqui vai ser retirado o script e tudo que tiver dentro dele
    if (this._escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }

    //quando trabalharmos com innerHTML, o ideal é que façamos um escape da string que vamos colocar no html por questão de segurança.

    this._elemento.innerHTML = template;
  }
}
