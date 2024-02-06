module.exports = {
    port: process.env.PORT || 3001,
    mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/bookstore-website-db',
    secretKey: process.env.SECRET_KEY || 'your_secret_key',
};
