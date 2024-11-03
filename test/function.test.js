import {expect} from 'chai';
import { bookService } from "../function.js";

describe("Book Service Tests", function() {

    beforeEach(function() {

        bookService.books = [
            { id: "1", title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
            { id: "2", title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction" },
            { id: "3", title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Classic" }
        ];

    });


    describe("getBooks()", function() {

        it("should return a status 200 and an array of books", function() {

            const response = bookService.getBooks();

            expect(response.status).to.equal(200);
            expect(response.data).to.be.an('array').that.has.lengthOf(3);
            expect(response.data[0]).to.have.all.keys('id', 'title', 'author', 'year', 'genre');
        });
    });


    describe("addBook()", function() {

        it("should add a new book successfully", function() {

            const newBook = { id: "4", title: "Brave New World", author: "Aldous Huxley", year: 1932, genre: "Dystopian" };

            const response = bookService.addBook(newBook);

            expect(response.status).to.equal(201);
            expect(response.message).to.equal("Book added successfully.");
            expect(bookService.books).to.have.lengthOf(4);
            expect(bookService.books[3]).to.deep.equal(newBook);
        });


        it("should return status 400 when adding a book with missing fields", function() {

            const invalidBook = { id: "5", title: "Missing Author", year: 2021, genre: "Fiction" };

            const response = bookService.addBook(invalidBook);

            expect(response.status).to.equal(400);
            expect(response.error).to.equal("Invalid Book Data!");
        });
    });


    describe("deleteBook()", function() {

        it("should delete a book by id successfully", function() {

            expect(bookService.books).to.have.lengthOf(3);

            const response = bookService.deleteBook("1");
    
            expect(response.status).to.equal(200);
            expect(response.message).to.equal("Book deleted successfully.");
            expect(bookService.books).to.have.lengthOf(2);    
            expect(bookService.books.find(book => book.id === "1")).to.be.undefined;
        });


        it("should return status 404 when deleting a book with a non-existent id", function() {

            const response = bookService.deleteBook("999");

            expect(response.status).to.equal(404);
            expect(response.error).to.equal("Book Not Found!");
        });
    });


    describe("updateBook()", function() {

        it("should update a book successfully", function() {

            const originalBook = bookService.books.find(book => book.id === "2");

            expect(originalBook).to.exist;
    
            const updatedBook = { id: "2", title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Classic Fiction" };
    
            const response = bookService.updateBook("2", updatedBook);
    

            expect(response.status).to.equal(200);
            expect(response.message).to.equal("Book updated successfully."); 
            expect(bookService.books[1]).to.deep.equal(updatedBook);
        });


        it("should return status 404 when updating a non-existent book", function() {

            const response = bookService.updateBook("999", { id: "999", title: "Non-existent Book", author: "Unknown", year: 2021, genre: "Unknown" });

            expect(response.status).to.equal(404);
            expect(response.error).to.equal("Book Not Found!");
        });


        it("should return status 400 when updating with incomplete book data", function() {

            const incompleteBook = { id: "2", title: "Incomplete Book", year: 1960 };

            const response = bookService.updateBook("2", incompleteBook);

            expect(response.status).to.equal(400);
            expect(response.error).to.equal("Invalid Book Data!");
        });
    });
});