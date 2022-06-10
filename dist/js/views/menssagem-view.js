export class MensagemView {
    constructor(seletor) {
        this._element = document.querySelector(seletor);
    }
    template(model) {
        return `
        <p class="alert alert-info">${model}</p>
    `;
    }
    update(model) {
        const template = this.template(model);
        this._element.innerHTML = template;
    }
}
