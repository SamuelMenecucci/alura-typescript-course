export function logarTempoDeExecucao() {
  return function (
    //o target pode ser duas coisas: Se o decorator for colocado em um método estático esse target é a função construtora da classe. se for colocado em um método que não é estático ele vai retornar o prototype da classe
    target: any,

    //da o nome do método como string que foi decorado
    propertyKey: string,

    //tem uma referência para o método original
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(
        `${propertyKey}, tempo de execução: ${(t2 - t1) / 1000} segundos`
      );
      return retorno;
    };

    //uma função decorator tem que retornar um descriptor
    return descriptor;
  };
}
