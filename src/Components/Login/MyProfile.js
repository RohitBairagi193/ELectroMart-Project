import React from 'react';
import Im32 from '../Images/boy.png';
import { Link } from 'react-router-dom';
import '../Login/MyProfile.css'
import { useNavigate } from 'react-router-dom';

const MyProfile = (props) => {
  const navigate = useNavigate(); 
  const handleLogoutClick = () => {
     props.handleLogout(); 
     navigate('/'); 
    window.location.reload(); 
  };

  return (
    <div >
      <div className="profile">
        <img src={Im32} alt="Cart" />
        <h1>My Account</h1>
        <p>Name: {props.name}</p>
        <p>Mobile: {props.mobile}</p>
        <Link to={'/'}>
          <button type="button">Continue Shopping</button>
        </Link>
        <Link to={'/'}>
          <button type="button" onClick={handleLogoutClick}>
            Log out
          </button>
        </Link>


      </div>
    </div>
  );
}

export default MyProfile;
