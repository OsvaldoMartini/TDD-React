describe("sumClamp", () => {
  it("should sum up to zero", () => {
    expect(sumClamp([], 10).toBe(0);
  });
  it("should sum up to zero from some numbers", () => {
    expect(sumClamp([-1,1], 10)).toBe(0);
  })
})
