import FactoresPrimos from "./primos";

describe("Numeros Primos", () => {
  it("devuelve 1", () => {
    expect(FactoresPrimos.generar(1)).toEqual(null);
  });
});
