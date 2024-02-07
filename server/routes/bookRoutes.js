const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware, bookController.getAllBooks);
router.get('/:bookId', authMiddleware, bookController.getBookById);
router.post('/', authMiddleware, bookController.createBook);
router.put('/:bookId', authMiddleware, bookController.updateBook);
router.delete('/:bookId', authMiddleware, bookController.deleteBook);

module.exports = router;
