/* eslint-disable react/prop-types */
const BookMark = ({ blog, time }) => {
    return (
        <div className='w-1/3'>
            <div className="border border-purple-800 bg-purple-200 rounded-md p-4 text-xl text-center font-bold">Spent Time On Reading: {time} min</div>
            <div className="mt-3 rounded-md text-center bg-gray-100 h-[90%]">
                <h1 className="font-bold text-xl pt-4">BookMarked Blogs: {blog.length}</h1>
                {
                    blog.map((title, idx) => <div key={idx} className="bg-white text-xl font-bold mx-4 p-4 rounded-md shadow-md my-3">{title.title}</div>)
                }
            </div>
        </div>
    );
};

export default BookMark;