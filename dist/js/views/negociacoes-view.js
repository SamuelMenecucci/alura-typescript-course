export class NegociacoesView {
    constructor(seletor) {
        //pego o seletor do elemento html que será passado na instância, e com o nome dele eu armazeno na minha propriedade
        this._elemento = document.querySelector(seletor);
    }
    //declaro o template da view, que será uma tabela
    template(model) {
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
            new Intl.DateTimeFormat().format(element.data)} </td>
                  <td>${element.quantidade}</td>
                  <td>${element.valor}</td>
                </tr> `;
        })
            .join("")}
          
        </tbody>
    </table>
    `;
    }
    //passo o template para dentro do elemento que foi selecionado
    //pegando os dados que serão renderizados em tela
    update(model) {
        //passando para o template
        this._elemento.innerHTML = this.template(model);
    }
}
