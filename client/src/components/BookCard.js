import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';

const BookCard = ({ book }) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={book.image}
                    alt={book.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {book.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {book.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={2}>
                        {book.description}
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                        <Typography variant="body1" color="text.secondary">
                            ${book.price}
                        </Typography>
                        <Button variant="contained" color="primary">
                            Add to Cart
                        </Button>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default BookCard;
