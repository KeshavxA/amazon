import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { useStateValue } from '../StateProvider';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [_, dispatch] = useStateValue();

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(auth => {
        dispatch({
          type: 'SET_USER',
          user: auth.user
        });
        navigate('/');
      })
      .catch(error => alert(error.message));
  };

  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        dispatch({
          type: 'SET_USER',
          user: auth.user
        });
        navigate('/');
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className="login__logo"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
          alt="Amazon Logo"
        />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h5>Password</h5>
            <span 
              onClick={() => setShowPassword(!showPassword)} 
              style={{ cursor: 'pointer', fontSize: '12px', color: '#007185' }}
            >
              {showPassword ? 'Hide' : 'Show'} password
            </span>
          </div>
          <input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} />

          <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        {/* The register button will be fully styled in feature 2 */}
        <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login;
