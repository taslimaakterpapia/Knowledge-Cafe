import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = ({handlerReadTime, handlerBookmarks, blogTitles}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])
  return (
    <div className='col-md-8'>
      {
        blogs.map(blog => <SingleBlog
          blog={blog}
          key={blog.id}
          handlerReadTime={handlerReadTime}
          handlerBookmarks={handlerBookmarks}
          blogTitles={blogTitles}
        ></SingleBlog>)
      }
    </div>
  );
};

export default Blogs;