/* eslint-disable react/prop-types */
const SingleBlog = ({ blog, addToBookmark, handleReadingTime }) => {
    return (
        <div className="mb-8">
            <figure>
                <img
                    src={blog.cover}
                    alt={blog.title} 
                    className="w-full h-[350px] object-cover" />
            </figure>
            <div className="flex justify-between items-center my-5">
                <div className="flex gap-5 items-center">
                    <img src={blog.author_img} alt="author_img" className="rounded-full w-10" />
                    <div>
                        <p className="font-bold text-xl">{blog.author}</p>
                        <p>{blog.posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <p>Reading Time: {blog.reading_time} min</p>
                    <button onClick={() => {addToBookmark(blog), handleReadingTime(blog.reading_time)}}><i className="fa-regular fa-bookmark text-red-600 text-xl"></i></button>
                </div>
            </div>
            <h1 className="font-bold text-2xl md:text-4xl mt-3">How to get your first job as a self-taught programmer</h1>
            <p className="my-3 flex gap-5">{
                blog.hashtags.map((hashtag, idx) => <div key={idx}>#{hashtag}</div>)
            }</p>
            <a href="#" className="text-violet-700 underline text-lg font-bold">Mark as read</a>
        </div>
    );
};

export default SingleBlog;