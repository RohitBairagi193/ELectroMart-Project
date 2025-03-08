import React from 'react'
import './Footer.css'
import shop from '../Images/shop.png'
import whatsapp from '../Images/whatsapp.png'
import twitter from '../Images/twitter.png'
import facebook from '../Images/facebook.png'
import skype from '../Images/skype.png'
import youtube from '../Images/youtube.png'
const Footer = () => {
  return (
    <>
      <div className='about-footer-main'>
        <h3>About Us</h3>
        <div className="about">

          <div>
            <img src={shop} alt="" /><h1>Shop with M-cart</h1>
          </div>
          <div>
            <p>
            M-Cart is an intuitive and user-friendly e-commerce platform designed to streamline the online shopping experience. It offers a responsive shopping cart interface, allowing customers to easily view, modify, and manage their selected products. The website supports various payment methods and provides secure transactions. With features like product recommendations and promotional discounts, M-Cart enhances user engagement and boosts sales. Its clean design and efficient navigation make it a top choice for online retailers.
            </p>
          </div>
        </div>

        <div className="footer">
          <div className="help">
            <h2>Help</h2>
            <ul>
              <li><p>Products</p></li>
              <li><p>Orders</p></li>
              <li><p>Issues</p></li>
              <li><p>Problem</p></li>
              <li><p>Bank Issues</p></li>
              <li><p>Report</p></li>  
            </ul>
          </div>
          <div className="help">
            <h2>Social Media</h2>
            <ul>
              <li><img src={facebook} alt="" /><p>Facebook</p></li>
              <li><img src={whatsapp} alt="" /><p>Whatsapp</p></li>
              <li><img src={twitter} alt="" /><p>Twitter</p></li>
              <li><img src={skype} alt="" /><p>Skype</p></li>
              <li><img src={youtube} alt="" /><p>Youtube</p></li>
              
            </ul>
          </div>
          <div className="help">
            <h2>Company</h2>
            <ul>
              <li><p>Samsung</p></li>
              <li><p>Apple</p></li>
              <li><p>Realme</p></li>
              <li><p>iQoo</p></li>
              <li><p>Asus</p></li>
              <li><p>Oneplus</p></li>                
            </ul>
          </div>
        </div>
        <div className='copyright'><p>---copyright @2024---</p></div>
      </div>
    </>
  )
}

export default Footer
