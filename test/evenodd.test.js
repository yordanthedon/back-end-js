import {expect} from 'chai';
import {isOddOrEven} from "../evenodd.js";

describe('isOddOrEven function tests', function(){
    it('undefined', function(){
        expect(isOddOrEven(123)).to.be.undefined
        expect(isOddOrEven({})).to.be.undefined
        expect(isOddOrEven([])).to.be.undefined
        expect(isOddOrEven([1,2,3])).to.be.undefined
        expect(isOddOrEven(null)).to.be.undefined
    })
    it('even', function(){
        expect(isOddOrEven('four')).to.be.equal('even')
        expect(isOddOrEven('fourfour')).to.be.equal('even')
    })
    it('odd', function(){
        expect(isOddOrEven('1')).to.be.equal('odd')
        expect(isOddOrEven('yyY')).to.be.equal('odd')
    })
})