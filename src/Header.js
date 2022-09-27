import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";
function Header() {
    const[{basket,user},dispatch] = useStateValue();

    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" className="header_logo" />
            </Link>
            
            <div className="header_search">
                <input type="text" className="header_searchInput"
                 />
                 <SearchIcon className='header_searchIcon' />
            </div>

            <div className="header_nav">
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className="header_option">
                    <span className="header_optionLioneOne">
                        Hello {!user ? 'Guest':user.email}
                    </span>
                    <span className="header_optionLineTwo">
                        {user ? 'Sign Out':'Sign In'}
                    </span>
                </div>
                </Link>
                

                <div className="header_option">
                <span className="header_optionLioneOne">
                        Returns
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>

                <div className="header_option">
                <span className="header_optionLioneOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <AddShoppingCartIcon  />
                        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
