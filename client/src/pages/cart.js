// Cart.js
import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-2">
                            <div>
                                <p className="text-lg font-bold">{item.name}</p>
                                <p className="text-gray-600">Price: ${item.price}</p>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 font-bold hover:text-red-700"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="mt-4">
                        <p className="text-lg font-bold">Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
