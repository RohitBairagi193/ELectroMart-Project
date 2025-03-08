import React, { useEffect, useState } from 'react'
import './ProductDetailes.css'
import { useParams } from 'react-router-dom'
import items from '../Data'
import Product from './Product'
import { toast } from 'react-toastify';
const ProductDetailes = () => {
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
  const {id} = useParams()
  const[product,setProduct]= useState({})
  const[relatedProduct,setRelatedProduct] = useState([]) 
  useEffect(()=>{
    const filterProduct =items.filter((item)=>item.id === Number(id));
    setProduct(filterProduct[0]);
    const relatedProduct = items.filter((item)=>item.category === product.category);
   setRelatedProduct(relatedProduct)
  },[id,product.category])
  return (
    <>  
    <div className="main-card">
      <div className='card-desc'><img id='card' src={product.imgSrc} alt="" /></div>
      <div className='card-desc'> <h5>{product.title}</h5>
                <p>{product.description}</p>
                <p className="price">$ {product.price}</p>
                <p><button onClick={handleBuyNow}>Buy Now</button>
                    <button onClick={handleaddtocart}>Add to Cart</button>
                </p></div>
    </div>
    <hr className='main-card-hr'/>
     <h2 className='main-card-h2'>Related Products</h2>
        <Product items={relatedProduct}/>
    </>
  )
}

export default ProductDetailes
