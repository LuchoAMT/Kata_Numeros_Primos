import FactoresPrimos from "./primos";

describe("Numeros Primos", () => {
  it("devuelve una lista vacía", () => {
    expect(FactoresPrimos.generar(1)).toEqual([]);
  });

  it("devuelve 2", () => {
    expect(FactoresPrimos.generar(2)).toEqual([2]);
  });
});
