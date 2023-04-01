import React from 'react';


const Header = () => {
    return (
        <div>
            <nav className="d-flex justify-content-between align-items-center mx-md-5 px-md-5 mt-3">
                <a className="navbar-brand fs-3 fw-semibold" href="#">
                    Knowledge Cafe
                </a>
                <img src="https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=AAVVOvN9uY1Rd_0QsWb8WvBN-4VSUdCORiZx51s5OLc=" width="40px" height="40px" className="rounded-circle" alt="" />
            </nav>
            <hr className='mt-4 container text-center ' />
        </div>
    );
};

export default Header;