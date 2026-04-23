import React, { useState } from 'react';
import './Loginpage.css';
import Im31 from '../Images/shopping-bag.png';
import MyProfile from './MyProfile';

const Loginpage = (props) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  

  const handleReset = () => {
    setName('');
    setMobile('');
    setEmail('');
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
            mobile={mobile}
            email={email}
            onEdit={handleReset}
          />
        ) : (
          <>
            <img src={Im31} alt="Cart" />
            <h1>Welcome to ELectroMart</h1>
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
                type="tel"
                placeholder='Enter your mobile no.'
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                onInvalid={(e) => handleInvalid(e, 'Please enter your mobile number.')}
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
              <button type="submit" onClick={props.handleLogin}>Sign In</button>
              <button type="button" onClick={() => window.location.href = "/Loginpage2"}>Log In</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Loginpage;
