import testReducer, { increment, decrement } from "./testSlice";
describe("counter reducer", () => {
  const initialState = {
    value: 3,
    status: "idle",
  };

  it("should handle increment", () => {
    const actual = testReducer(initialState, increment());
    // console.log("actual", actual);
    expect(actual.value).toEqual(4);
  });

  it("should handle decrement", () => {
    const actual = testReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });
});
