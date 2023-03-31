import React from 'react';
import './Blogs.css'

const Blogs = (props) => {
    const { id, name, image, date, time, title, tag, banner } = props.blog;
    
    
    const handelAddTOData =props.handelAddTOData;
    
    
    
    
    
    
    return (
        <div className='blogs'>
            <img src={banner} alt="" />

            <div className='author'>

                <div className='author-info'>
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
                    {/* <a href=""><img src="image/Vector.png" alt="" /></a> */}
                    <button onClick={() => handelAddTOData(props.blog)} className='icon'>
                        <img src="image/Vector.png" alt="" /></button>
                </div>

            </div>


            <h1>{title}</h1>            
            <p>{tag}</p>
            <a className='mark-as-read' href="">Mark as read</a>
            


        </div>
    );
};

export default Blogs;