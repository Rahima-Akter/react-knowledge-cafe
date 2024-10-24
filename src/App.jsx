import { useState } from "react";
import Blogs from "./components/Blogs";
import BookMark from "./components/BookMark";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  
  const [blog, setBlog] = useState([])
  const [time, setTime] = useState(0)

  const addToBookmark = bookMark => {
    const bookMarks = [...blog, bookMark]
    setBlog(bookMarks)
  }

  const handleReadingTime = readingTime => {
    const newReadingTime = time + readingTime;
    setTime(newReadingTime);
  }

  return (
    <>
      <Header></Header>

      {/* main section */}
      <section className="w-10/12 mx-auto flex gap-5 mt-12">
        <Blogs addToBookmark={addToBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <BookMark blog={blog} time={time}></BookMark>
      </section>
      <Footer></Footer>

    </>

  );
};

export default App;