import React from 'react';
import './Header.css'
import logo from '../../component/images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />

            <div className='menu'>
                <a href="/shop">shop</a>
                <a href="/order">order</a>
                <a href="/inventory">inventory</a>
                <a href="/Login">Login</a>
            </div>
        </div>
    );
};

export default Header;