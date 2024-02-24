// bookService.js

const BASE_URL = '/books';

const bookService = {
    getAllBooks: async () => {
        try {
            const response = await fetch(BASE_URL);
            const books = await response.json();
            return books;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    getBookById: async (bookId) => {
        try {
            const response = await fetch(`${BASE_URL}/${bookId}`);
            const book = await response.json();
            return book;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    createBook: async (bookData) => {
        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookData),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    updateBook: async (bookId, bookData) => {
        try {
            const response = await fetch(`${BASE_URL}/${bookId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookData),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    deleteBook: async (bookId) => {
        try {
            const response = await fetch(`${BASE_URL}/${bookId}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
};

export default bookService;
