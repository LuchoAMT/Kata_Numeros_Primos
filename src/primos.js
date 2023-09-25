
class FactoresPrimos{
  static generar(n){
    let primos = [];
    for(let candidato=2; n>1; candidato++){
      for(; n%candidato === 0; n /= candidato){ //el primer punto y coma delimita la inicialización del for (que no existe en este caso)
        primos.push(candidato);
      }
    }
    return primos;
  }
}

export default  FactoresPrimos;