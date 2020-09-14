import React from 'react';
import './Header.css';
import Logo from '../../images/logo-amazon.png';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <nav className='header'>

            <Link to='/'>
                <img className='header-logo' src={Logo} alt='amazon-logo' />
            </Link>

            <div className='header-search'>
                <input className='search-input' type='text' />
                <SearchIcon className='search-icon' />
            </div>

            <div className='header-links'>
                <Link to='/login' className='header-link'>
                    <span className='header-firstLink'>Hello Amine</span>
                    <span className='header-secondLink'>Sign in</span>
                </Link>
                <Link to='/' className='header-link'>
                    <span className='header-firstLink'>Returns</span>
                    <span className='header-secondLink'>& Orders</span>
                </Link>
                <Link to='/' className='header-link'>
                    <span className='header-firstLink'>Your</span>
                    <span className='header-secondLink'>Prime</span>
                </Link>
            </div>
            <div className='basket'>
                <Link className='basket-link' to='/checkout'>
                    <ShoppingBasketIcon className='basket-icon' />
                    <span className='number-items'>0</span>
                </Link>
            </div>
        </nav>
    )
}

export default Header;
