import React from 'react';
import './Blogs.css'

const Blogs = (props) => {
    const {id, name, image, date, time, title, tag, banner} = props.blog;
    return (
        <div className='blogs'>
           <img src={banner} alt="" />
         
           <div>








           </div>





        </div>
    );
};

export default Blogs;