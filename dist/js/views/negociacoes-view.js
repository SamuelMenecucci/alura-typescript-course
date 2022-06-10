export class NegociacoesView {
    constructor(seletor) {
        //pego o seletor do elemento html que será passado na instância, e com o nome dele eu armazeno na minha propriedade
        this._elemento = document.querySelector(seletor);
    }
    //declaro o template da view, que será uma tabela
    template() {
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
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    `;
    }
    //passo o template para dentro do elemento que foi selecionado
    update() {
        this._elemento.innerHTML = this.template();
    }
}
