import React from 'react'
import './Slide.css'

import Isale from '../Images/salephone.png'
import Isale2 from '../Images/laptopsell.png'
import Isale3 from '../Images/laptopsell2.png'
import Isale4 from '../Images/laptopsell3.png'
import Isale5 from '../Images/laptopsell4.png'
import Isale6 from '../Images/laptopsell6.png'
const Slide = () => {
  return (
    <div>
      <div className="pic-ctn">
      <img src={Isale5} alt="" className="pic" />
        <img src={Isale} alt="" className="pic" />
        <img src={Isale2} alt="" className="pic" />
        <img src={Isale3} alt="" className="pic" />
        <img src={Isale4} alt="" className="pic" />
        <img src={Isale6} alt="" className="pic" />
      </div>
    </div>
  )
}

export default Slide
