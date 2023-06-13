// Import the function to be tested
const factorial = require('./factorial'); // Assuming the factorial function is in a separate file called factorial.js

// Test suite
describe('Factorial', () => {
    // Test case for factorial of 0
    test('Factorial of 0 should return 1', () => {
        expect(factorial(0)).toBe(1);
    });

    // Test case for factorial of a positive number
    test('Factorial of a positive number should be calculated correctly', () => {
        expect(factorial(4)).toBe(24);
        expect(factorial(5)).toBe(120);
        expect(factorial(10)).toBe(3628800);
    });

    // Test case for factorial of 1
    test('Factorial of 1 should return 1', () => {
        expect(factorial(1)).toBe(1);
    });

    // // Test case for factorial of a negative number
    // test('Factorial of a negative number should throw an error', () => {
    //     expect(() => factorial(-5)).toThrow('Factorial is not defined for negative numbers');
    // });
    //
    // // Test case for factorial of a non-integer number
    // test('Factorial of a non-integer number should throw an error', () => {
    //     expect(() => factorial(3.5)).toThrow('Factorial is not defined for non-integer numbers');
    // });
});
