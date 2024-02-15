// BookCard.js
import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h3 className="text-xl font-bold">{book.title}</h3>
            <p className="text-gray-600">{book.author}</p>
            <p className="mt-2 text-gray-800">{book.description}</p>
            <div className="flex justify-between items-center mt-4">
            <span className="text-gray-600">${book.price}</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add to Cart</button>
            </div>
        </div>
        </div>
    );
};

export default BookCard;
