import React, { useState } from 'react';
import './Subnav.css';
import items from '../Data';
import Product from '../Product/Product';

const Subnav = () => {
    const [menu, setMenu] = useState("all-items");
    const [product, setRelatedProduct] = useState(items); 

    const relatedProduct = (categories) => {
        if (categories === "all-items") {
            setRelatedProduct(items);
        } else {
            const filteredProducts = items.filter((item) => categories.includes(item.category));
            setRelatedProduct(filteredProducts);
        }
    };

    return (
        <div>
            <div className="nav-bar-wrapper">
                <div className="items" onClick={() => { setMenu("all-items"); relatedProduct("all-items"); }}>
                    <p>All Products</p>
                    {menu === "all-items" && <hr />}  {/* ✅ <p> ke bahar */}
                </div>
                <div className="items" onClick={() => { setMenu("laptops"); relatedProduct('laptops'); }}>
                    <p>Laptops</p>
                    {menu === "laptops" && <hr />}
                </div>
                <div className="items" onClick={() => { setMenu("mobiles"); relatedProduct('mobiles'); }}>
                    <p>Mobiles</p>
                    {menu === "mobiles" && <hr />}
                </div>
                
                <div className="items" onClick={() => { setMenu("earburds"); relatedProduct('earburds'); }}>
                    <p>Earbuds</p>
                    {menu === "earburds" && <hr />}
                </div>
                <div className="items" onClick={() => { setMenu("others"); relatedProduct(['headphones', 'smartwatchs']); }}>
                    <p>Others</p>
                    {menu === "others" && <hr />}
                </div>
            </div>
            <Product items={product}/>
        </div>
    );
};

export default Subnav;