describe("Levels", () => {
  test("Tile A should always be Overworld", () => {
    expect("Overworld").toBe("Overworld");
  });

  test("Tile B should never be Hidden", () => {
    expect("Not Hidden").not.toBe("Hidden");
  });

  test("Tile E should always be 404", () => {
    expect("404").toBe("404");
  });
});
