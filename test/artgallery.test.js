import {expect} from 'chai';
import {artGallery} from "../artgallery.js";

describe("art gallery object tests", function(){
    describe("add artwork function tests", function(){
        it("error for invalid title/artist", function(){
            expect(() => artGallery.addArtwork(123, "30 x 40", "Van Gogh")).to.throw("Invalid Information!")
            expect(() => artGallery.addArtwork("Title", "30 x 40", 123)).to.throw("Invalid Information!")
        })
        it("error for invalid dimension", function(){
            expect(() => artGallery.addArtwork("title", "30 / 40", "Van Gogh")).to.throw("Invalid Dimensions!")
            expect(() => artGallery.addArtwork("title", "{} x 40", "Van Gogh")).to.throw("Invalid Dimensions!")
            expect(() => artGallery.addArtwork("title", "30 x []", "Van Gogh")).to.throw("Invalid Dimensions!")
        })
        it("invalid artist", function(){
            expect(() => artGallery.addArtwork("title", "30 x 40", "George")).to.throw("This artist is not allowed in the gallery!")
            expect(() => artGallery.addArtwork("title", "30 x 40", "Simo")).to.throw("This artist is not allowed in the gallery!")
            expect(() => artGallery.addArtwork("title", "30 x 40", "Nikol")).to.throw("This artist is not allowed in the gallery!")
        })
        it("correct message", function(){
            expect(artGallery.addArtwork("title", "30 x 40", "Van Gogh")).to.equal("Artwork added successfully: 'title' by Van Gogh with dimensions 30 x 40.")
        })
    })
    describe("calculate costs", function(){
        it("throw error message invalid parametars", function(){
            expect(() => artGallery.calculateCosts("100", 100, true)).to.throw("Invalid Information!")
            expect(() => artGallery.calculateCosts(100, "100", true)).to.throw("Invalid Information!")
            expect(() => artGallery.calculateCosts(100, 100, "true")).to.throw("Invalid Information!")
            expect(() => artGallery.calculateCosts(100, -100, true)).to.throw("Invalid Information!")
            expect(() => artGallery.calculateCosts(-100, 100, true)).to.throw("Invalid Information!")
        })
        it("should calculate total costs without discount", function(){
            expect(artGallery.calculateCosts(100,200,false)).to.equal("Exhibition and insurance costs are 300$.")
        })
        it("should calculate total costs with discount", function(){
            expect(artGallery.calculateCosts(100,200,true)).to.equal("Exhibition and insurance costs are 270$, reduced by 10% with the help of a donation from your sponsor.")
        })
    })
    describe("organizeExhibits function tests", function(){
        it("error is thrown when it's invalid data", function(){
            expect(()=> artGallery.organizeExhibits("10", 2)).to.throw("Invalid Information!")
            expect(()=> artGallery.organizeExhibits(10, "2")).to.throw("Invalid Information!")
            expect(()=> artGallery.organizeExhibits(10, {})).to.throw("Invalid Information!")
            expect(()=> artGallery.organizeExhibits([], 2)).to.throw("Invalid Information!")
            expect(()=> artGallery.organizeExhibits(-10, 2)).to.throw("Invalid Information!")
            expect(()=> artGallery.organizeExhibits(10, -2)).to.throw("Invalid Information!")
        })
        it("should return correct message > 5",function(){
            expect(artGallery.organizeExhibits(10, 3)).to.equal("There are only 3 artworks in each display space, you can add more artworks.")
        })
        it("should return correct message < 5",function(){
            expect(artGallery.organizeExhibits(20, 4)).to.equal("You have 4 display spaces with 5 artworks in each space.")
        })
    })
})