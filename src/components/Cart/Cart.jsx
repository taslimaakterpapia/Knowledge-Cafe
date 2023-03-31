import React, { useEffect, useState } from 'react';
import './Cart.css'
import Blogs from '../Blogs/Blogs';
const Cart = () => {

 const [cart, setCart] = useState([]);
 useEffect(() =>{
 fetch('data.json')
 .then(res => res.json()) 
 .then(data => setCart(data))

 },[])

    return (
        <div className='container'>

            <div className='blog-container'>
              

              {
                cart.map(blog =><Blogs
                key ={blog.id}
                blog = {blog}
                ></Blogs>)
              }
              </div>

            <div className='bookmark'> 
           <h4>Bookmarked Blogs : </h4>
            </div>
            
        </div>
    );
};

export default Cart;