import React from 'react';
import './Blogs.css'

const Blogs = (props) => {
    const { id, name, image, date, time, title, tag, banner } = props.blog;
    return (
        <div className='blogs'>
            <img src={banner} alt="" />

            <div className='author'>

                <div className='img'>
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div className='name'>
                        <h4>{name}</h4>
                        <p className='title'>{date}</p>
                    </div>

                </div>

                <div className='time'>
                    <h5>{time}</h5>
                    <img src="image/Vector.png" alt="" />
                </div>

            </div>


            <h1>{title}</h1>            
            <p>{tag}</p>

            <p className='mark-as-read'>Mark as read</p>


        </div>
    );
};

export default Blogs;