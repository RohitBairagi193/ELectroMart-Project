import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Im31 from '../Images/shopping-bag.png';
import Im32 from '../Images/boy.png';
import cart from '../Images/shopping-cart.png';
import { Link, useLocation } from 'react-router-dom';


const Navbar = (props) => {
    const location = useLocation();
    const [menu, setMenu] = useState(localStorage.getItem('menu') || "home");
  


    useEffect(() => {
        const path = location.pathname;
        if (path === '/' || path === '/home') setMenu('home');
        else if (path.startsWith('/products')) setMenu('products');
        else if (path.startsWith('/about')) setMenu('about');
        else setMenu('');
        localStorage.setItem('menu', menu);
    }, [location, menu]);

 
    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={Im31} alt="Cart" />
                    <p>ELectroMart</p>
                </div>
                <ul className="nav-menu">
                    <li onClick={() => { setMenu("home") }}>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>HOME</Link>
                        {menu === "home" && <hr />}
                    </li>
                    <li onClick={() => { setMenu("products") }}>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/products'>PRODUCTS</Link>
                        {menu === "products" && <hr />}
                    </li>
                    <li onClick={() => { setMenu("about") }}>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/about'>ABOUT</Link>
                        {menu === "about" && <hr />}
                    </li>
                </ul>
                <div className="nav-login-cart">
                    {(props.loggedIn) && (props.submitted) ? (
                        <div className="nav-logo">
                            <Link to={'/myprofile'}><img src={Im32} alt="Account"/></Link>
                        </div>
                    ) : (
                        <Link to='/login'><button>Login</button></Link>
                    )}
                    <Link to='/cart'><img src={cart} alt="Cart" /></Link>
                    <div className="nav-cart-count">0</div>
                </div>
            </div>

           
        </> 
    )
}

export default Navbar;
