import React from 'react'
import {Link} from 'react-router-dom';
import img1 from '../assets/images/showcase-img-1.png';
import img2 from '../assets/images/showcase-img-2.png';


const ShowcaseSection: React.FC = () => {
    return (
        <section className="showcase container">
            <img src={img1} className="showcase-image-left" alt="showcase-img-1" />
            <div className="showcase-body">
                <h1>SALE UP</h1>
                <h1>To 50% Off</h1>
                <p>Online shopping free home delivery over $100</p>
                <Link to="/products" className="btn-theme"><div className="corner-left"></div>SHOP NOW<div className="corner-right"></div></Link>
            </div>
            <img src={img2} className="showcase-image-right" alt="showcase-img-2" />
        </section>
    )
}

export default ShowcaseSection