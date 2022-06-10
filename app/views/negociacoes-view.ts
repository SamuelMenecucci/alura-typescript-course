import { Negociacoes } from "../models/Negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
  //declaro o template da view, que será uma tabela
  protected template(model: Negociacoes): string {
    return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>Data</th>
                <th>Quantidade</th>
                <th>Valor</th>
            </tr>
        </thead>

        <tbody>
        ${model
          .lista()
          .map((element) => {
            return `
                <tr>
                  <td> ${this.formatar(element.data)} </td>
                  <td>${element.quantidade}</td>
                  <td>${element.valor}</td>
                </tr> `;
          })
          //o método join retorna um array como uma string e não muda o array original.
          //qualquer separador pode ser especificado, o padrão é virgula. se eu utilizar algum outro como parâmetro, passando dentro de uma string, ele que será o separador de cada elemento.
          .join("")}
          
        </tbody>
    </table>
    `;
  }

  private formatar(data: Date): string {
    //O intl é uma api de internacionalização do ES, se eu não passar nenhum parâmetro para o dateformat, ele leva em consideração a localização do usuário, pego pelo navegador.
    return new Intl.DateTimeFormat().format(data);
  }
}
