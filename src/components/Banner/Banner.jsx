import BannerImg from "../../assets/books.jpg"
const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse px-5 py-16 md:p-32">
                <img
                    src={BannerImg}
                    className="rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold mb-5">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-green-500">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;