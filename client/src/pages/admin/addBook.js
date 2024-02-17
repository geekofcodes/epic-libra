import React from 'react';

const AddBook = () => {
    return (
        <div>
            <h1>Add Book</h1>
            <form>
                <label>Title:</label>
                <input type="text" /><br />
                <label>Author:</label>
                <input type="text" /><br />
                <label>Description:</label>
                <textarea></textarea><br />
                <label>Price:</label>
                <input type="text" /><br />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
