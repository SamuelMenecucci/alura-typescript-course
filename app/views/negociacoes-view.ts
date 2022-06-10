import { Negociacoes } from "../models/Negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
  //declaro o template da view, que será uma tabela
  template(model: Negociacoes): string {
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
                  <td> ${
                    //O intl é uma api de internacionalização do ES, se eu não passar nenhum parâmetro para o dateformat, ele leva em consideração a localização do usuário, pego pelo navegador.
                    new Intl.DateTimeFormat().format(element.data)
                  } </td>
                  <td>${element.quantidade}</td>
                  <td>${element.valor}</td>
                </tr> `;
          })
          .join("")}
          
        </tbody>
    </table>
    `;
  }
}
