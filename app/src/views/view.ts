//classe que irá dar os métodos das views como herança, para reaproveitamento de código.

import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

//A view trás os métodos que serão utilizadas pelas subclasses, porém, mesmo que elas estejam utilizando os mesmos métodos, os tipos de parâmtros desses métodos são diferentes, por isso que eu utilizo o generics, passando ele entre <>, assim eu digo que esse tipo será definido na classe filha
//esse tipo é definido na hora que eu estendo a View, e passo o tipo dentro da subclasse
//quando eu digo que uma classe é abstrata, significa que ela não pode ser instanciada, apenas ser utilizada por subclasses
export abstract class View<T> {
  //crio uma propriedade que irá armazenar um elemento html
  //com o modificador de acesso protected, as propriedades são visíveis para as subclasses, ou seja, as classes que estenderem poderão ter acesso as propriedades, mas nas instâncias essa propriedade ainda continua sendo invisível
  protected _elemento: HTMLElement;

  //pego o seletor do elemento html que será passado na instância, e com o nome dele eu armazeno na minha propriedade
  //o ponto de interrogação em typescript diz que a propriedade pode ser opcional e não obrigatória. um parâmetro obrigatório não pode ter um parâmetro opcional antes dele.
  constructor(seletor: string) {
    const elemento = document.querySelector(seletor);

    if (elemento) {
      this._elemento = document.querySelector(seletor) as HTMLInputElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM`);
    }
  }

  //mesmo as classes que estenderem view tendo o método template, o retorno é diferente, aí que entra o polimorfismo.
  //se as filhas não chamarem o método template, o que será utilizado é o retorno que está na classe pai, que aqui está retornando um erro, mas se na classe filha esse método for chamado e o retorno for diferente, ele irá sobre escrever o retorno de erro.
  // template(model: T): string {
  //   throw Error("Classe filha precisa implementar o métodos template");
  // }
  //para que eu não precise fazer da forma a cima, posso dizer que o método é abstrato, assim, torno ele obrigatório quando alguma subclasse herdar view. da forma acima, o erro será visto apenas em run time, e aqui eu o torno visível em ambiente de desenvolvimento.
  protected abstract template(mode: T): string;

  @inspect
  @logarTempoDeExecucao(true)
  //passo o template para dentro do elemento que foi selecionado
  //pegando os dados que serão renderizados em tela
  public update(model: T): void {
    let template = this.template(model);

    //quando trabalharmos com innerHTML, o ideal é que façamos um escape da string que vamos colocar no html por questão de segurança. o meu decorator fica responsável por isso.
    this._elemento.innerHTML = template;
  }
}
