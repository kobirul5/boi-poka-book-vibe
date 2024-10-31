
const Book = ({ book }) => {
    const {bookName, image, author, rating, category} = book
    return (
        <div className="card border p-8">
            <figure className="bg-blue-200 p-8 rounded-3xl">
                <img
                    src={image}
                    alt={bookName}
                    className="h-[166px]" />
            </figure>
            <div className="card-body p-5">
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
    );
};

export default Book;