var findFirstNum = require("../src/findNum.js");

describe('Find first non-consecutive num in array', () => {
    // it('findFirstNum([array]) must return array.length of 2', () => {
    //     expect(findFirstNum([1,2,3])).toEqual(3);
    // });

    it("elements in findFirstNum([1,2,3,4,5,6]) are all consecutive", () => {
      expect(findFirstNum([1,2,3,4,5,6])).toEqual(null);
    });

    it('The first NON-consecutive num in findFirstNum([1,2,4,5,6])', () => {
        
        expect(findFirstNum([1,2,4,5,6])).toEqual(4);
    });

});
