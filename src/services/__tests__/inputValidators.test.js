import { isUserNameValid, isPasswordValid } from '@Services/inputValidators';

const userNameTestCases = [
    ['test', true],
    ['test123', true],
    ['test/', false],
    ['test*', false],
    ['test ', false],
    ['test-', false],
    ['test+', false],
    ['test`', false],
    ['test!', false],
    ['test#', false],
    ['test$', false],
    ['test%', false],
    ['test^', false],
    ['test&', false],
    ['test(', false],
    ['test)', false],
    ['test$<', false],
    ['test$?>', false],
];
const passwordTestCases = [
    ['test', true],
    ['test123', true],
    ['test/', true],
    ['test*', true],
    ['test ', false],
    ['test-', true],
    ['test+', true],
    ['test`', true],
    ['test!', true],
    ['test#', true],
    ['test$', true],
    ['test%', true],
    ['test^', true],
    ['test&', true],
    ['test(', true],
    ['test)', true],
    ['test$<', true],
    ['test$?>', true],
];

describe('user name validation test', () => {
    test.each(userNameTestCases)('%s', (input, isValid) => {
        const result = isUserNameValid(input);
        expect(result).toBe(isValid);
    });
});

describe('password validation test', () => {
    test.each(passwordTestCases)('%s', (input, isValid) => {
        const result = isPasswordValid(input);
        expect(result).toBe(isValid);
    });
});
