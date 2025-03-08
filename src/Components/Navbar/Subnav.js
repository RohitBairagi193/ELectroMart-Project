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
            const filteredProducts = items.filter((item) =>(categories.includes(item.category)))
            setRelatedProduct(filteredProducts);
        }
    };

    return (
        <div>
            <div className="nav-bar-wrapper">
                <div className="items" onClick={() => { setMenu("all-items"); relatedProduct("all-items"); }}>
                    <p>
                        All Products {menu === "all-items" && <hr />}
                    </p>
                </div>
                <div className="items" onClick={() => { setMenu("mobiles"); relatedProduct('mobiles'); }}>
                    <p>
                        Mobiles {menu === "mobiles" && <hr />}
                    </p>
                </div>
                <div className="items" onClick={() => { setMenu("laptops"); relatedProduct('laptops'); }}>
                    <p>
                        Laptops {menu === "laptops" && <hr />}
                    </p>
                </div>
                <div className="items" onClick={() => { setMenu("earburds"); relatedProduct('earburds'); }}>
                    <p>
                        Earbuds {menu === "earburds" && <hr />}
                    </p>
                </div>
                <div className="items" onClick={() => { setMenu("others"); relatedProduct(['headphones', 'smartwatchs']); }}>
                    <p>
                        Others {menu === "others" && <hr />}
                    </p>
                </div>
            </div>
            <Product items={product}/>
        </div>
    );
};

export default Subnav;
