import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addStoredReadList } from '../../utility/AddTodb';
import { addStoredWishList } from '../../utility/AddWhis';

const BookDetails = () => {
    const { bookId } = useParams()
    const data = useLoaderData()
    const id = parseInt(bookId)
    const book = data.find((book) => book.bookId === id)
    const { bookName, image, author, rating, category, tags, review, yearOfPublishing, publisher, totalPages } = book

    const handleMarkAsRead = (id) => {
        addStoredReadList(id)
    }
    const handleMarkAsWish = (id) => {
        addStoredWishList(id)
    }

    return (
        <div>
            <h1>books details:{bookId} </h1>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row md:p-16 gap-10">
                    <img
                        src={image}
                        className="md:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="pt-6">By: {author}</p>
                        <div className='divider'></div>
                        <p>{category}</p>
                        <div className='divider'></div>
                        <p><span className='font-bold'>Review:</span>{review}</p>
                        <div className='my-6'> <span className='font-bold'>Tag</span>
                            {
                                tags.map((tag, idx) => <button key={idx} className='btn btn-xs text-green-500 ml-4'>#{tag}</button>)
                            }

                        </div>
                        <div className='divider'></div>
                        <div className='grid grid-cols-2 mb-6 gap-5'>
                            <p className='text-gray-500'>Number of Page:</p>
                            <p className='font-bold'>{totalPages}</p>
                        </div>
                        <div className='grid grid-cols-2 mb-6 gap-5'>
                            <p className='text-gray-500'>Publisher:</p>
                            <p className='font-bold'>{publisher}</p>
                        </div>
                        <div className='grid grid-cols-2 mb-6 gap-5'>
                            <p className='text-gray-500'>Year of Publishing:</p>
                            <p className='font-bold'>{publisher}</p>
                        </div>
                        <div className='grid grid-cols-2 mb-6 gap-5'>
                            <p className='text-gray-500'>Rating:</p>
                            <p className='font-bold'>{rating}</p>
                        </div>
                        <div className='flex gap-5 font-bold'>
                            <button 
                            onClick={()=>handleMarkAsRead(bookId)}
                             className="btn btn-accent btn-outline font-bold">Mark as Read</button>
                            <button 
                            onClick={()=> handleMarkAsWish(bookId)}
                            className="btn btn-accent font-bold">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;