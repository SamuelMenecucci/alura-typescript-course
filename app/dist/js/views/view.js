export class View {
    constructor(seletor, escapar) {
        this._escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this._elemento = document.querySelector(seletor);
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM`);
        }
        if (escapar) {
            this._escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this._elemento.innerHTML = template;
    }
}
