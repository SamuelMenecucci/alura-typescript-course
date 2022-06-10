//DOC https://www.typescriptlang.org/docs/handbook/enums.html

//com enum eu consigo trabalhar com constantes e utilizar em toda a minha aplicação.
//se eu não passar nenhum valor como referencia para essa constante, o typescript coloca em sequencia numérica, iniciando de 0
//se eu iniciar somente a primeira constante com algum valor numérico, ele irá colocar automaticamente a sequencia numérica para os próximos, caso não seja dada.
//se no meio eu adicionar somente um valor, após aquela constante, a lógica irá seguir a partir daquele valor.
export enum DiasDaSemana {
  DOMINGO = 0,
  SEGUNDA = 1,
  TERCA = 2,
  QUARTA = 3,
  QUINTA = 4,
  SEXTA = 5,
  SABADO = 6,
}
