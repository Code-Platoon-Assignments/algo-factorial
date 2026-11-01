const factorial = require("./factorial.js");

describe("general factorial tests", () => {
    test("factorial(2)", () => {
        expect(factorial(2)).toBe(2)
    });
    test("factorial(4)", () => {
        expect(factorial(4)).toBe(24)
    });
    test("factorial(24)", () => {
        expect(factorial(24)).toBe(620448401733239439360000)
    });
});

// describe("factorial edge cases"), () => {
//     test("factorial(0"), () => {
//         expect(factorial(0)).toBe(1)
//     }
//     test("factorial(1)"), () => {
//         expect(factorial(1)).toBe(1)
//     }
// }
// Test how high of a number your program can calculate. Can you push it further?
