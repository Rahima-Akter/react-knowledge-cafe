import { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";

const Blogs = ( {addToBookmark}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    console.log(blogs)

    return (
        <div className="w-2/3">
            {
                blogs.map(blog => <SingleBlog key={blog.id} blog={blog} addToBookmark={addToBookmark}></SingleBlog>)
            }
        </div>
    );
};

export default Blogs;