import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Navbar/Footer';
import Loginpage from './Components/Login/Loginpage';
import ProductDetailes from './Components/Product/ProductDetailes';
import Subnav from './Components/Navbar/Subnav';
import Product from './Components/Product/Product';
import MyProfile from './Components/Login/MyProfile';
import Cart from './Components/Cart/Cart';
import Loginpage2 from './Components/Login/Loginpage2';
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      <Router>
        <Navbar loggedIn={loggedIn} handleLogin={handleLogin} submitted={submitted} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<Subnav />}>
            <Route path='/products' element={<Product/>} />
          </Route>
          <Route path='/about' element={<Footer />} />
          <Route path='/login' element={<Loginpage handleLogin={handleLogin} handleSubmit={handleSubmit} submitted={submitted} />} />
          <Route path='/Loginpage2' element={<Loginpage2 handleLogin={handleLogin}  handleSubmit={handleSubmit} submitted={submitted} />}/>
          <Route path='/myprofile' element={<MyProfile handleLogout={handleLogout} />} />
          <Route path='/product/:id' element={<ProductDetailes/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
