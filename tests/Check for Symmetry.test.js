import {expect} from 'chai'
import {isSymmetric} from "../Check for Symmetry.js"

describe("isSymmetric functonality test", function(){
    it("true", function(){
        let testData = ['1', '2', '3', '2', '1'];

        let result = isSymmetric(testData)

        expect(result).to.be.true;
    })
    it("false", function(){
        let testData = ['1', '2', '3', '1'];

        let result = isSymmetric(testData)

        expect(result).to.be.false;
    })
    it("false", function(){
        let testData = 'not an arr';

        let result = isSymmetric(testData)

        expect(result).to.be.false;
    })
    it("true", function(){
        let testData = [];

        let result = isSymmetric(testData)

        expect(result).to.be.true;
    })
    it("false", function(){
        let testData = ['1', 1];

        let result = isSymmetric(testData)

        expect(result).to.be.false;
    })
})