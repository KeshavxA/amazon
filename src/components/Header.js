import React, { useState } from 'react';
import './Header.css';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [searchInput, setSearchInput] = useState("");

  const handleAuthenticaton = () => {
    if (user) {
      dispatch({
        type: 'SET_USER',
        user: null
      });
    }
  }

  const handleSearch = () => {
    if (searchInput.trim()) {
      toast.info(`Searching for: ${searchInput}`, { position: "bottom-right", autoClose: 2000 });
      setSearchInput("");
    }
  };

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
        <input 
          className="header__searchInput" 
          type="text" 
          placeholder="Search Amazon" 
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <div className="header__searchIcon" onClick={handleSearch} style={{cursor: 'pointer'}}>🔍</div>
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello, {!user ? 'Guest' : user.email.split('@')[0]}</span>
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
