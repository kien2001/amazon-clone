import React from 'react'
import "./header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateProvider/stateProvider'

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue()
    console.log(user);
    return (
        <nav className='header'>
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="header__logo">
                    <StorefrontIcon className='header__logo--image' fontSize='large' />
                    <h2 className='header__logo--title'>eSHOP</h2>
                </div>
            </Link>

            <div className="header__search">
                <input type="text" className='header__search--input' />
                <SearchIcon className='header__search--icon' />
            </div>
            <div className="header__nav">
                {user.isLogin === false ? (
                    <Link to='/login' style={{ textDecoration: "none" }}>
                        <div className="nav__item">
                            <span className="nav__item--lineOne">Hello Guest</span>
                            <span className="nav__item--lineTwo">Sign in</span>
                        </div>
                    </Link>
                ) : (
                    <div className="nav__item">
                        <span className="nav__item--lineOne">{`Hello ${user.name}`}</span>
                        <a href="" onClick={dispatch({ type: "LOG_OUT" })}><span className="nav__item--lineTwo">Sign out</span></a>
                    </div>
                )
                }

                <div className="nav__item">
                    <span className="nav__item--lineOne">Your</span>
                    <span className="nav__item--lineTwo">Shop</span>
                </div>
                <div className="nav__item--basket">
                    <Link to='/checkout' style={{ textDecoration: "none", color: "white" }}>
                        <ShoppingBasketIcon />
                    </Link>
                    <span className="nav__item--lineTwo nav__basket--count">{basket.length}</span>
                </div>

            </div>
        </nav>
    )
}

export default Header