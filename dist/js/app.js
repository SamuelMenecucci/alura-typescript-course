import { NegociacaoController } from "./controllers/negociacao.controller.js";
//pego o body da página
const body = document.body;
//crio uma div
const div = document.createElement("div");
//adiciono um id e um nome para o id dentro da div que criei
div.setAttribute("id", "negociacoesView");
//adiciono essa div dentro do body
body.appendChild(div);
const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    controller.adiciona();
});
