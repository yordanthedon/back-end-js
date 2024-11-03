import {expect} from 'chai'
import {sum} from "../Sum of Numbers.js"

describe("Sum function tests", function() {
    it("Correct sum of array", function() {
        let testData = [1, 2, 3];
        let result;

        result = sum(testData);

        expect(result).to.be.equal(6);
    })
    it("string sum of array", function() {
        let testData = ['1', '2', '3'];
        let result;

        result = sum(testData);

        expect(result).to.be.equal(6);
    })
    it("zero sum of array", function() {
        let testData = [];
        let result;

        result = sum(testData);

        expect(result).to.be.equal(0);
    })
    it("string sum of array", function() {
        let testData = ['abs', 'abc', 'abf'];
        let result;

        result = sum(testData);

        expect(result).to.be.NaN;
    })
    it("correct sum of negative array", function() {
        let testData = ['-1', '-2', '-3'];
        let result;

        result = sum(testData);

        expect(result).to.be.equal(-6);
    })
    it("correct sum of negative array", function() {
        let testData = [-1, '-2', '-3'];
        let result;

        result = sum(testData);

        expect(result).to.be.equal(-6);
    })
    it("correct sum of negative array", function() {
        let testData = [1, 2, '-3'];
        let result;

        result = sum(testData);

        expect(result).to.be.equal(0);
    })
})