import React, { useEffect, useState } from 'react';

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    
    return (
        <div className='my-10'>
            <h1 className='text-4xl text-center'>Books {books.length} </h1>
        </div>
    );
};

export default Books;