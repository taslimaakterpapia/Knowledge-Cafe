import React, { useEffect, useState } from 'react';
import './Cart.css'
import Blogs from '../Blogs/Blogs';
const Cart = () => {

 const [cart, setCart] = useState([]);
 const [bookmark, setBookmark] = useState([]);




 useEffect(() =>{
 fetch('data.json')
 .then(res => res.json()) 
 .then(data => setCart(data))

 },[])

 const handelAddTOData = (cart) => {
   const newBookmark = [...bookmark, cart];
   setBookmark(newBookmark);


}


    return (
        <div className='container'>

            <div className='blog-container'>
              

              {
                cart.map(blog =><Blogs
                key ={blog.id}
                blog = {blog}
                handelAddTOData = {handelAddTOData}
                ></Blogs>)
                
              }
              </div>

            <div className='bookmark'> 
           <h4>Bookmarked Blogs: {bookmark.length}  </h4>
            </div>
            
        </div>
    );
};

export default Cart;