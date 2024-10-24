import { useState } from "react";
import Blogs from "./components/Blogs";
import BookMark from "./components/BookMark";
import Header from "./components/Header";

const App = () => {
  
  const [blog, setBlog] = useState([])

  const addToBookmark = bookMark => {
    const bookMarks = [...blog, bookMark]
    setBlog(bookMarks)
  }

  return (
    <>
      <Header></Header>

      {/* main section */}
      <section className="w-10/12 mx-auto flex gap-5 mt-12">
        <Blogs addToBookmark={addToBookmark}></Blogs>
        <BookMark></BookMark>
      </section>

    </>

  );
};

export default App;