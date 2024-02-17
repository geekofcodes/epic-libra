import React from 'react';

const UpdateBook = () => {
    return (
        <div>
            <h1>Update Book</h1>
            <form>
                <label>Title:</label>
                <input type="text" /><br />
                <label>Author:</label>
                <input type="text" /><br />
                <label>Description:</label>
                <textarea></textarea><br />
                <label>Price:</label>
                <input type="text" /><br />
                <button type="submit">Update Book</button>
            </form>
        </div>
    );
};

export default UpdateBook;
