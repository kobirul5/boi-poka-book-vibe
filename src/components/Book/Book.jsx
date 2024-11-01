import { Link } from "react-router-dom";
const Book = ({ book }) => {
    const {bookId, bookName, image, author, rating, category, tags } = book


    return (
        <Link to={`/book/${bookId}`}>
            <div className="card border p-8">
                <figure className="bg-blue-200 p-8 rounded-3xl">
                    <img
                        src={image}
                        alt={bookName}
                        className="h-[166px]" />
                </figure>
                <div className="card-body p-5">
                    <div className="flex gap-6">
                        {
                            tags.map((tag, index) => <button 
                                key={index}
                                className="btn btn-xs text-green-500"
                                >{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>{author}</p>
                    <div className="flex justify-between border-b border-dashed pb-3 my-3 ">
                        <p>{category}</p>
                        <p className=" text-right ">{rating}</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;