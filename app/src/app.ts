import { NegociacaoController } from "./controllers/negociacao.controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

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

//como eu ativei o strictNullChecks, preciso garantir que os valores são válidos para o typescript não apontar erro, por isso eu coloquei o form dentro de um if, pois assim o typescript entende que mesmoque o form for nulo, não irá quebrar a aplicação em run time
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    controller.adiciona();
  });
} else {
  throw Error(
    "Não foi possível inicializar a aplicação. Verifique se o form existe"
  );
}
