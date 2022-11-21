import React from 'react'
import img1 from '../assets/images/pamela-img.svg'
import img2 from '../assets/images/concious-img.svg'

const TopPicksSection: React.FC = () => {
  return (
    <section className="top-picks">
        <div className="top-picks-left">
            <img src={img1} className="image-left" alt="showcase-img-1" />
            <h1>Pamela Reif's</h1>
            <p>Top Picks</p>
            <button className="btn-dark">
                <div className="corner-left"></div>
                SHOP NOW
                <div className="corner-right"></div>
            </button>
        </div>
        <div className="top-picks-right">
            <img src={img2} className="image-right" alt="showcase-img-2" />
            <h1>Let's Be</h1>
            <p>Concious</p>
            <button className="btn-light">
                <div className="corner-left"></div>
                    FLASH SALE
                <div className="corner-right"></div>
            </button>
        </div>
    </section>
  )
}

export default TopPicksSection