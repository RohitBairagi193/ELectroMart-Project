import React from 'react';
import './Additems.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Additems = ({ id, imgSrc, title, description, price}) => {
  const handleBuyNow = () => {
    toast.success('Order successfully', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleaddtocart = () => {
    toast.success('Product added to cart', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div className="card">
        <Link to={`/product/${id}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <img onClick={window.scrollTo(0,0)} id='card' src={imgSrc} alt={title} />
        </Link>
        <h5>{title}</h5>
        <p>{description}</p>
        <p className="price">$ {price}</p>
        <p>
          <button onClick={handleBuyNow}>Buy Now</button>
          <button onClick={handleaddtocart}>Add to Cart</button>
        </p>
      </div>
    </>
  );
}

export default Additems;
