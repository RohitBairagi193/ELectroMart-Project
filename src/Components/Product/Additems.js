import React from 'react';
import './Additems.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Additems = ({ id, imgSrc, title, description, price }) => {
  
  const handleBuyNow = () => {
    toast.success('Order successfully', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });
  };

  const handleAddToCart = () => {
    toast.success('Product added to cart', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });
  };

  return (
    <div className="card">
      <Link to={`/product/${id}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    
        <img onClick={() => window.scrollTo(0, 0)} id='card' src={imgSrc} alt={title} />
      </Link>
      <h5>{title}</h5>
      <p>{description}</p>
      <p className="price">$ {price}</p>
    
      <div className="card-buttons">
        <button onClick={handleBuyNow}>Buy Now</button>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Additems;