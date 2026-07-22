import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='notFound'>
      <Link to='/'>
        <img
          className="notFound__logo"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
          alt="Amazon Logo"
        />
      </Link>
      <div className='notFound__container'>
        <h2>Looking for something?</h2>
        <p>We're sorry. The Web address you entered is not a functioning page on our site.</p>
        <Link to="/">
          <button className='notFound__homeButton'>Go to Amazon Home Page</button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound;
