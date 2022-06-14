import { NegociacaoController } from "./controllers/negociacao.controller.js";
const body = document.body;
const div = document.createElement("div");
div.setAttribute("id", "negociacoesView");
body.appendChild(div);
const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error("Não foi possível inicializar a aplicação. Verifique se o form existe");
}
