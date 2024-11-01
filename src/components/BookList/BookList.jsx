import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/AddTodb';
import Book from '../Book/Book';

const BookList = () => {
    const [books, setBooks] = useState([])
    const allBooks = useLoaderData()

    useEffect(()=> {
        const storedReadList = getStoredReadList()
        const storedReadListInt = storedReadList.map((id)=> parseInt(id))
        console.log(storedReadListInt)
        const listedBooks = allBooks.filter(book=> storedReadListInt.includes(book.bookId))
        setBooks(listedBooks)
    },[])
    return (
        <div className='px-5 my-10'>
            <h1 className="text-4xl my-8">Listed Books</h1>
            <Tabs>
                <TabList>
                    <Tab>Read List </Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-4xl font-bold my-8'>Book I read : {books.length}</h2>
                    <div className='grid grid-cols-3 gap-4 '>
                        {
                            books.map(book=><Book book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>My wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default BookList;