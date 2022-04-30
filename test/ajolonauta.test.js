const Ajolonauta = require("./../app/ajolonauta")

describe("Pruebas de unidad Ajolonauta", () => {
  test("Caso de prueba 1: Creacion de objeto", () => {
    // Aqui se puede usar el codigo como se desea 
    const woopa = new Ajolonauta("woopa");
    // Validar resultado esperado
    expect(woopa.name).toBe("woopa");
  });
});
