import React from 'react';
import './Product.css';
import Additems from './Additems';
import Footer from '../Navbar/Footer';

const Product = ({ items}) => {
  if (!items || !Array.isArray(items)) {
    return <div>No items to display</div>;
  }

  return (
    <>
      <div className="container"> 
        <div className='row'>
          {items.map((item, i) => (
            <Additems 
              key={i} 
              id={item.id} 
              category={item.category} 
              title={item.title} 
              description={item.description} 
              imgSrc={item.imgSrc} 
              price={item.price} 
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Product;
