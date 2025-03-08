import React, { useState } from 'react';
import './Loginpage.css';
import Im31 from '../Images/shopping-bag.png';
import MyProfile from './MyProfile';

const Loginpage = (props) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  

  const handleReset = () => {
    setName('');
    
    setPassword('');
    (props.setSubmitted(false))
  };


  const handleInvalid = (e, message) => {
    e.target.setCustomValidity(message);
  };

  const handleInput = (e) => {
    e.target.setCustomValidity('');
  };

  return (
    <div>
      <div className="main-log-card">
        {(props.submitted) ? (
          <MyProfile
            name={name}
            onEdit={handleReset}
          />
        ) : (
          <>
            <img src={Im31} alt="Cart" />
            <h1>Welcome to M-cart</h1>
            <h2>Please enter your details to log in</h2>
            <form onSubmit={props.handleSubmit}>
              <input
                className='input-f'
                type="text"
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                onInvalid={(e) => handleInvalid(e, 'Please enter your name.')}
                onInput={handleInput}
                required
              />
            
              <input
                className='input-f'
                type="password"
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onInvalid={(e) => handleInvalid(e, 'Please enter your password.')}
                onInput={handleInput}
                required
              />
               <button type="button" onClick={() => window.location.href = "/login"}>Sign In</button>
              <button type="submit" onClick={props.handleLogin}>Log In</button>
             
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Loginpage;
