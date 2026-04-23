import items from '../Data'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const Cart = () => {

  const handleBuyNow = () => {
    toast.success('Order successfully', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
  };

  const { id } = useParams();
  const [product, setProduct] = useState(null); 

  useEffect(() => {
    const filterProduct = items.filter((item) => item.id === Number(id));
    setProduct(filterProduct[0]);
  }, [id]); 


  if (!product) return <div>Loading...</div>;

  return (
    <div className="main-card">
      <div className='card-desc'>
       
        <img id='card' src={product.imgSrc} alt="" />
      </div>
      <div className='card-desc'>
    
        <h5>{product.title}</h5>
        <p>{product.description}</p>
   
        <p className="price">$ {product.price}</p>
        <div>
          <button onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;