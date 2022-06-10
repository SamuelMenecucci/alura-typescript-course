//DOC https://www.typescriptlang.org/docs/handbook/enums.html
//com enum eu consigo trabalhar com constantes e utilizar em toda a minha aplicação.
//se eu não passar nenhum valor como referencia para essa constante, o typescript coloca em sequencia numérica, iniciando de 0
//se eu iniciar somente a primeira constante com algum valor numérico, ele irá colocar automaticamente a sequencia numérica para os próximos, caso não seja dada.
//se no meio eu adicionar somente um valor, após aquela constante, a lógica irá seguir a partir daquele valor.
export var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana[DiasDaSemana["DOMINGO"] = 0] = "DOMINGO";
    DiasDaSemana[DiasDaSemana["SEGUNDA"] = 1] = "SEGUNDA";
    DiasDaSemana[DiasDaSemana["TERCA"] = 2] = "TERCA";
    DiasDaSemana[DiasDaSemana["QUARTA"] = 3] = "QUARTA";
    DiasDaSemana[DiasDaSemana["QUINTA"] = 4] = "QUINTA";
    DiasDaSemana[DiasDaSemana["SEXTA"] = 5] = "SEXTA";
    DiasDaSemana[DiasDaSemana["SABADO"] = 6] = "SABADO";
})(DiasDaSemana || (DiasDaSemana = {}));
