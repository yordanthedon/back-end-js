import {expect} from 'chai';
import {lookupChar} from "../Char Lookup.js";

describe("lookupChar Function", function(){
    it("undefined", function(){
        expect(lookupChar(123, 0)).to.be.undefined;
        expect(lookupChar([], 0)).to.be.undefined;
        expect(lookupChar({}, 0)).to.be.undefined;
        expect(lookupChar(null, 0)).to.be.undefined;
        expect(lookupChar("hello", "0")).to.be.undefined;
        expect(lookupChar("hello", 1.5)).to.be.undefined;
        expect(lookupChar("hello", [])).to.be.undefined;
        expect(lookupChar("hello", null)).to.be.undefined;
    })
    it("incorrect index - Incorrect index", function(){
        expect(lookupChar("hello", -1)).to.equal("Incorrect index");
        expect(lookupChar("hello", 5)).to.equal("Incorrect index");
        expect(lookupChar("hello", 10)).to.equal("Incorrect index");
        expect(lookupChar("", 0)).to.equal("Incorrect index");
    })
    it("correct", function(){
        expect(lookupChar('two', 2)).to.be.equal('o')
        expect(lookupChar('three', 3)).to.be.equal('e')
        expect(lookupChar('two', 1)).to.be.equal('w')
        expect(lookupChar('two', 0)).to.be.equal('t')
    })
})
