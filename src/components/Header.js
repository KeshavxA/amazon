import React from 'react';
import './Header.css';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      // Firebase sign out will go here
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <img 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="Amazon Logo" 
          />
        </div>
      </Link>
      
      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="Search Amazon" />
        <div className="header__searchIcon">🔍</div>
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header__optionBasket">
            <span className="header__basketIcon">🛒</span>
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
