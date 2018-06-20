const findFirstNum = require("../src/findNum.js");

describe("Find first non-consecutive num in array", () => {
  it('findFirstNum([1,2,4,5]) must return 4', () => {
      expect(findFirstNum([1,2,4,5])).toEqual(4);
  });

  it("elements in findFirstNum([1,2,3,4,5,6]) are all consecutive", () => {
    expect(findFirstNum([1, 2, 3, 4, 5, 6])).toBeUndefined();
  });

  it("The first NON-consecutive num in findFirstNum([1,2,4,5,6]) is 4", () => {
    expect(findFirstNum([1, 2, 4, 5, 6])).toEqual(4);
  });
});
