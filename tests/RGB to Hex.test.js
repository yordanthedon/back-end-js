import {expect} from 'chai'
import {rgbToHexColor} from "../RGB to Hex.js"

describe("rgbToHexColor", function(){
    it("pass", function(){
        let result = rgbToHexColor(123, 123, 123);

        expect(result).to.be.equal('#7B7B7B')
    })
    it("minus number", function(){
        let result = rgbToHexColor(-123, 123, 123);

        expect(result).to.be.undefined;
    })
    it("minus number", function(){
        let result = rgbToHexColor(123, -123, 123);

        expect(result).to.be.undefined;
    })
    it("minus number", function(){
        let result = rgbToHexColor(123, 123, -123);

        expect(result).to.be.undefined;
    })
    it("correct 0", function(){
        let result = rgbToHexColor(0, 0, 0);

        expect(result).to.be.equal('#000000');
    })
    it("correct 255", function(){
        let result = rgbToHexColor(255, 255, 255);

        expect(result).to.be.equal('#FFFFFF');
    })
    it("string", function(){
        let result = rgbToHexColor('str', 255, 255);

        expect(result).to.be.undefined;
    })
    it("correct 255", function(){
        let result = rgbToHexColor(2551, 255, 255);

        expect(result).to.be.undefined;
    })
})