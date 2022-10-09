/* eslint-disable no-undef */
const {sum, sub, div, mult} = require('../index');

describe('Test Calcu', () => {
	it('Should return sum between 10 and 20', () => {
		const expected = 30;
		const retuned = sum(10, 20);
		expect(retuned).toBe(expected);
	});
	it('Should return subtration between 20 and 30', () => {
		const expected = 10;
		const retuned = sub(30, 20);
		expect(retuned).toBe(expected);
	});
	it('Should return division by 6 for 2', () => {
		const expected = 3;
		const retuned = div(6, 2);
		expect(retuned).toBe(expected);
	});
	it('Should return multiplication by 5 for 3', () => {
		const expected = 15;
		const retuned = mult(5, 3);
		expect(retuned).toBe(expected);
	});
});
