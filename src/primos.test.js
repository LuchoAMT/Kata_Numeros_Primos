import FactoresPrimos from "./primos";

describe("Numeros Primos", () => {
  it("devuelve una lista vacía", () => {
    expect(FactoresPrimos.generar(1)).toEqual([]);
  });

  it("devuelve 2", () => {
    expect(FactoresPrimos.generar(2)).toEqual([2]);
  });

  it("devuelve 3", () => {
    expect(FactoresPrimos.generar(3)).toEqual([3]);
  });

  it("devuelve 2,2", () => {
    expect(FactoresPrimos.generar(4)).toEqual([2,2]);
  });

  it("devuelve 2,3", () => {
    expect(FactoresPrimos.generar(6)).toEqual([2,3]);
  });

  it("devuelve 2,2,2", () => {
    expect(FactoresPrimos.generar(8)).toEqual([2,2,2]);
  });

  it("devuelve 3,3", () => {
    expect(FactoresPrimos.generar(9)).toEqual([3,3]);
  });
});
