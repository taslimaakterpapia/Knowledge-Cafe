import React from 'react';
import './Sidebar.css'

const Sidebar = ({ readTime, blogTitles, bookmarksCounter }) => {
  return (
    <div className='blogs col-md-4'>
      <div className='spend-time'>
        <p>Spent time on read: {readTime}</p>
      </div>
      <div className='bookmarks'>
        <p>Bookmarked Blogs : {bookmarksCounter}</p>
        <div className='bookmarks-blogs row row-col-1 gap-2 mx-3'>
          {
            blogTitles.map((blogTitle, index) => {
              return (
                <div className='blogs-title' key={index}>
                  <div className='blogs-title'>
                    <p>{blogTitle}</p>
                  </div>
                </div>
              )

            })
          }

        </div>
      </div>
    </div>
  );
};

export default Sidebar;